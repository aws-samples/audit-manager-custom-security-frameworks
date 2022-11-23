// Packages
const chalk = require('chalk')

class Logger {

    constructor(){
        this.error = false
        this.parsed_control_set = 0
        this.parsed_security_control = 0
        this.created_security_controls = 0
        this.deleted_security_controls = 0
    }

    logParsedData(){
        this.log(`Parsed a total of ${this.parsed_control_set} control sets`)
        this.log(`Parsed a total of ${this.parsed_security_control} security controls`)
    }

    logCreatedControls(){
        this.log(`Created a total of ${this.created_security_controls} custom security controls`)
    }

    logDeletedControls(){
        this.log(`Deleted a total of ${this.deleted_security_controls} custom security controls`)
    }

    done(){
        if(this.error){
            this.log(`Done / Error`, 1)
            process.exit(1)
        }
        this.log(chalk.green(`Done / Sucess`))
        process.exit(1)
    }

    log(message, severity=0){
        switch (severity) {
            case 1:
                console.log(chalk.red((`[ERROR] : ${message}`)))
                if(!this.error){ this.error = true }
                break
            default:
                console.log(`[INFO] : ${message}`)
                break
        }
    }
    
}

module.exports = new Logger();