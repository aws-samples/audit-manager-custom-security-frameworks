// Dependencies
const logger = require('../logger')

async function createSecurityControl(audit_manager, parsed_control_set_list, tag){
    let promise_list = []
    let control_set_list = []

    parsed_control_set_list.forEach((control_set)=>{
        let control_set_object = {"name": control_set.name, "controls":[]}

        control_set.controls.forEach( (control) => {
            let params = control
            params.tags = {"Project_Tags":tag}

            promise_list.push(
                audit_manager.createControl(params).promise()
                .then((result) => {
                    control_set_object.controls.push({"id":result.control.id, "name":params.name})
                    logger.log(`${control_set.name} | Created control id n* ${result.control.id}`)
                    logger.created_security_controls +=1
                })
                .catch((error) => {
                    logger.log(`${control_set.name} | ${error} | When creating : ${params.name}`, 1)
                })
            )
        })
        control_set_list.push(control_set_object)
    })

    await Promise.all(promise_list)
    return control_set_list
}

module.exports = createSecurityControl