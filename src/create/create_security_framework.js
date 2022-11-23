// Dependencies
const logger = require('../logger')

async function createSecurityFramework(audit_manager, custom_framework, control_set_list, tag){
    let params = {
        "name": custom_framework.name,
        "complianceType": custom_framework.complianceType,
        "description": custom_framework.description,
        "controlSets": control_set_list.map((control_set) => {return {"name":control_set.name, "controls":control_set.controls.map((controls) => {return {"id":controls.id}} )}}),
        "tags":{"Project_Tags":tag}
    }

    let result = await audit_manager.createAssessmentFramework(params).promise()
    .then((result) => {logger.log("Created security framework "+result.framework.name+ " of id n* "+result.framework.id); return result})
    .catch((error) => {logger.log(`${custom_framework.name} | ${error}`, 1); return error})

    return result
}

module.exports = createSecurityFramework