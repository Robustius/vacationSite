const Joi = require("joi");
const authlogic = require("../business-logic-layer/auth-logic");
class Registration {

    constructor(registration) {
        this.username = registration.username;
        this.password = registration.password;
        this.firstName = registration.firstName;
        this.lastName = registration.lastName;
    }

    static #validationSchema = Joi.object({
        username: Joi.string().required().min(4).max(50),
        password: Joi.string().required().min(4).max(50),
        firstName: Joi.string().required().min(4).max(50),
        lastName:Joi.string().required().min(4).max(50),
        
        
    });

    validate() {
        // const result = Registration.#validationSchema.validate(this, { abortEarly: false });
        // return result.error ? result.error.details.map(err => err) : null;  
        var obj={};
        obj.a=8;
        obj["b"]=19;

        const result = Registration.#validationSchema.validate(this, { abortEarly: false });
        const errObj = {};
        if (result.error) {
            result.error.details.map(err => {
                errObj[err.path[0]] = err.message;
                // errObj["username"]="ze user ze?";
            });
            console.log(errObj);
            return errObj;
        }
        return this.null;
    }
}

module.exports = Registration;