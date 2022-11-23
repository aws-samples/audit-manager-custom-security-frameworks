// Dependencies
const logger = require('../logger')

async function deleteSecurityControls(audit_manager, control_set){
    let promise_list = []
    control_set.forEach( (control) =>{
            promise_list.push(audit_manager.deleteControl({"controlId":control.id}).promise()
            .then((result) => {
                logger.log(`Deleting control id n* ${control.id}`)
                logger.deleted_security_controls += 1
            })
            .catch((error) => {
                logger.log(`${control.name} | ${error}`, 1)
            }))
        })

    return Promise.all(promise_list)
}

async function deleteSecurityControlSet(audit_manager, control_set_list){
    promise_list = []
    control_set_list.forEach( (control_set) => {
        promise_list.push(deleteSecurityControls(audit_manager, control_set.controls))
    })
    await Promise.all(promise_list)
}

module.exports.deleteSecurityControlSet = deleteSecurityControlSet
module.exports.deleteSecurityControls = deleteSecurityControls