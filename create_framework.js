// Packages
const aws = require("aws-sdk")
const fs = require("fs")

// Dependencies
const createSecurityControl = require('./src/create/create_security_control')
const createSecurityFramework = require('./src/create/create_security_framework')
const deleteSecurityControlSet = require('./src/delete/delete_security_control').deleteSecurityControlSet
const deleteSecurityFramework= require('./src/delete/delete_security_framework')
const logger = require('./src/logger')

// Objects
const args = require('minimist')(process.argv.slice(2));

// Const
const root_directory = "./data/"
const control_set_suffix = "_control_set"

function writeOutput(framework_name, control_set_list, framework_id, filename){
    let model = {
        security_framework_control_set : control_set_list,
        framework_id : framework_id,
        framework_name : framework_name
    }
    try {
        if(!fs.existsSync("./out/")){
            fs.mkdirSync('./out/')
        }
        fs.writeFileSync("./out/"+filename, JSON.stringify(model))
    } catch (error){
        logger.log(error, 1)
    }
    logger.log(`Creating file : ./out/${filename}`)
}

function parseData(data_dir){
    let control_set_list = []
    let filenames = fs.readdirSync(data_dir)
    let custom_framework = require(data_dir+"custom_framework.json")

    filenames.forEach((files) => {
        let control_set_object = {"name": null, "controls":[]}
        if (files.endsWith(control_set_suffix) && fs.statSync(data_dir+files).isDirectory()){
            logger.parsed_control_set+=1
            control_set_object.name = files.split('_')[0]

            let security_control = fs.readdirSync(data_dir+files)
            security_control.forEach((security_files) => {
                logger.parsed_security_control+=1
                security_control = require(data_dir+files+"/"+security_files)
                control_set_object.controls.push(security_control)
            })

            control_set_list.push(control_set_object)
        }
    })
    return { control_set_list, custom_framework }
}

async function main(tag, region, directory, framework){
    const audit_manager = new aws.AuditManager({region:region, maxRetries:10, retryDelayOptions:{base:300}})
    const data_dir = root_directory+directory+"/"+framework+"/"

    logger.log("--- Parsing data folder ---")
    let { control_set_list, custom_framework } = parseData(data_dir)
    logger.logParsedData()

    logger.log("--- Starting to create security controls ---")
    control_set_list = await createSecurityControl(audit_manager, control_set_list, tag)

    logger.log("--- Starting to create security Framework ---")
    let security_framework = await createSecurityFramework(audit_manager, custom_framework, control_set_list, tag)

    if (logger.error){
        logger.log("*** Error, backing off and exiting ***", 1)
        await deleteSecurityControlSet(audit_manager, control_set_list)
        await deleteSecurityFramework(audit_manager, security_framework.framework.id)
        logger.done()
    }

    logger.log("--- Writting Output ---")
    let filename = directory+"-"+framework+"-"+"framework_output.json"
    writeOutput(custom_framework.name, control_set_list, security_framework.framework.id, filename)
    logger.logCreatedControls()

    logger.done()
}

if (args.t == undefined){
    error_message = "Command line usage is ```Command line usage is ```node create_framework -t <tag> -r <aws-region> -d <directory> -f <framework>``` "
    throw new Error(error_message)
}

if (args.r == undefined){
    error_message = "Command line usage is ```Command line usage is ```node create_framework -t <tag> -r <aws-region> -d <directory> -f <framework>``` "
    throw new Error(error_message)
}

if (args.d == undefined){
    error_message = "Command line usage is ```node create_framework -t <tag> -r <aws-region> -d <directory> -f <framework>``` "
    throw new Error(error_message)
}

if (args.f == undefined){
    error_message = "Command line usage is ```node create_framework -t <tag> -r <aws-region> -d <directory> -f <framework>``` "
    throw new Error(error_message)
}

main(args.t, args.r, args.d, args.f)