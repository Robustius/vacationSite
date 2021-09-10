const express = require("express");

const authLogic = require("../business-logic-layer/auth-logic");
const Credentials = require("../model/credentials");
const Registration = require("../model/registration");

const router = express.Router();

router.get("/", async (request, response) => {
    try {
        // const response=await ...
        response.send("Auth");
    }
    catch (error) {
        response.status(500).send(error);
    }
});

// Login: 
router.post("/login", async (request, response) => {
    try {
        // Data: 
        const credentials = new Credentials(request.body);

        // Validation: 
        const errors = credentials.validate();
        if (errors) return response.status(400).send(errors);

        // Logic: 
        const loggedInUser = await authLogic.loginAsync(credentials);
        if (!loggedInUser) return response.status(401).send("Incorrect username or password.");

        // Success: 
        response.json(loggedInUser);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.post("/register", async (request, response) => {
    try {
        const reg = new Registration(request.body);
        const errors = reg.validate();
        
        if (errors) {
            console.log(errors);
            response.status(400).json(errors);
        }
        else {
            try {
                const result = await authLogic.registerAsync(reg);
                
                if(result==`${reg.username} is already Taken!`){
                    return response.json(result);
                }
                response.json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        }
    } catch (error) {
        response.status(500).send(error.message);
    }
});

module.exports = router;