// Packages
const aws = require("aws-sdk")
const fs = require("fs")

// Dependencies
const deleteSecurityControlSet = require('./src/delete/delete_security_control').deleteSecurityControlSet
const deleteSecurityFramework= require('./src/delete/delete_security_framework')
const logger = require('./src/logger')

// Objects
const args = require('minimist')(process.argv.slice(2));

function parseSecurityControls(output_file){
    output_file.security_framework_control_set.forEach( (control_set) => {
        control_set.controls.forEach( (security_control) => {
            logger.parsed_security_control+=1
        })
    })
    logger.log(`Parsed ${logger.parsed_security_control} security controls`)
}

async function main(filepath, region){

    const output_file = require(filepath)
    const audit_manager = new aws.AuditManager({region:region, maxRetries:10, retryDelayOptions:{base:300}})

    logger.log("--- Starting to delete security controls ---")
    parseSecurityControls(output_file)
    await deleteSecurityControlSet(audit_manager, output_file.security_framework_control_set)

    logger.log("--- Starting to delete security framework ---")
    await deleteSecurityFramework(audit_manager, output_file.framework_id)

    logger.log(`--- Deleting ${filepath} ---`)
    fs.unlinkSync(filepath)

    if (logger.parsed_security_control != logger.deleted_security_controls){
        logger.error = true
        logger.log(`Error when deleting security controls : Deleted : ${logger.deleted_security_controls} | Expected : ${logger.parsed_security_control}`,1)
        logger.log(`Manual cleaning might be required`,1)
        logger.done()
    }
    
    logger.logDeletedControls()
    logger.done()
}

if (args.f == undefined){
    error_message = "Command line usage is ```node delete_framework -f <file> -r <region>```"
    throw new Error(error_message)
}

if (args.r == undefined){
    error_message = "Command line usage is ```node delete_framework -f <file> -r <region>```"
    throw new Error(error_message)
}

main(args.f, args.r)