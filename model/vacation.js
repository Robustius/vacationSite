
const Joi = require("joi");
const productsLogic = require("../business-logic-layer/auth-logic");

class Vacation {
    constructor(vacation) {
        this.id= vacation.id;
        this.description = vacation.description;
        this.destination = vacation.destination;
        this.image = vacation.image;
        this.imageName=vacation.imageName;
        this.date = vacation.date;
        this.endDate = vacation.endDate;
        this.price = vacation.price;
        this.followers = vacation.followers;
    }

//     static #validationSchema = Joi.object({
//         id: Joi.string().required().min(4).max(50),
//         description: Joi.string().required().min(4).max(50),
//         destination: Joi.string().required().min(4).max(50),
//         date:Joi.required(),
//         endDate:Joi.required(),
//         price:Joi.required(),
        
        
//     });

//     validate() {
//         // const result = Registration.#validationSchema.validate(this, { abortEarly: false });
//         // return result.error ? result.error.details.map(err => err) : null;  
//         var obj={};
//         obj.a=8;
//         obj["b"]=19;

//         const result = Vacation.#validationSchema.validate(this, { abortEarly: false });
//         const errObj = {};
//         if (result.error) {
//             result.error.details.map(err => {
//                 errObj[err.path[0]] = err.message;
//                 // errObj["username"]="ze user ze?";
//             });
//             console.log(errObj);
//             return errObj;
//         }
//         return this.null;
//     }
// }

module.exports=Vacation;