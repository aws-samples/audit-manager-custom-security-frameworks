// Dependencies
const logger = require('../logger')

async function deleteSecurityFramework(audit_manager, assessment_framework_id){
    let result = await audit_manager.deleteAssessmentFramework({"frameworkId":assessment_framework_id}).promise().then(logger.log("Deleted framework id n* "+assessment_framework_id))
}

module.exports = deleteSecurityFramework