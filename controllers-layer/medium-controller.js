const express = require("express");
const verifyLoggedIn = require("../middleware/verify-logged-in");
const fileUpload = require("express-fileupload")
const productsLogic = require("../business-logic-layer/auth-logic");
const vacationLogic =require("../business-logic-layer/vacation-logic")
const router = express.Router();
router.use(fileUpload());
router.get("/", verifyLoggedIn, async (request, response) => {
    try {

        response.send('medium ok');
    }
    catch (error) {
        response.status(500).send(error);
    }
});

router.get("/vacations", verifyLoggedIn, async (request, response) => {
    try {
const vacations= await vacationLogic.getAllVacationsAsync()

        response.send(vacations);
    }
    catch (error) {
        response.status(500).send(error,"get error");
    }
});
router.get("/upload/:imageName", (request, response) => {
    try {
        // Data: 
        console.log(request.params.imageName);
        const imageName = request.params.imageName;
        // Logic: 
        let imageFile = path.join(__dirname,"..","upload", imageName);
        if (!fs.existsSync(imageFile)){
            imageFile = locations.notFoundImageFile;
}
        // Success: 
        response.sendFile(imageFile);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// router.get("/:id", verifyLoggedIn, async (request, response) => {
//     const id = request.params.id
//     try {
//         response.send("OK - Medium by " + id);
//     }
//     catch (error) {
//         response.status(500).send(error);
//     }
// });

module.exports = router;