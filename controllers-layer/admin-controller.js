const express = require("express");
const fs = require("fs")
const path = require("path")
const fileUpload = require("express-fileupload")
const vacationLogic = require("../business-logic-layer/vacation-logic")
const authLogic = require("../business-logic-layer/auth-logic");
const verifyAdmin = require("../middleware/verify-admin");
const verifyLoggedIn = require("../middleware/verify-logged-in");


const router = express.Router();
router.use(fileUpload());
router.get("/vacations", [verifyLoggedIn, verifyAdmin], async (request, response) => {
    try {
        const vacations = await vacationLogic.getAllVacationsAsync()
        
        response.send(vacations);
    }
    catch (error) {
        response.status(500).send(error);
    }
});
router.post("/addvacation", async (request, response) => {
    try {
        
        const newVacation = request.body;
        const data = await vacationLogic.addVacationAsync(newVacation);

        let name = request.files.image.name
        name = `${newVacation.imageName}.png`;
        const image = request.files.image;
        
        const absolutePath = path.join(__dirname, "..", "upload", name);

        await image.mv(absolutePath);

        response.send("OK");

    } catch (error) {
        response.status(500).send(error);
    }
});

// router.get("/upload/:imageName", (request, response) => {
//     try {
//         // Data: 
        
//         const imageName = request.params.imageName;

//         // Logic: 
//         let imageFile = path.join(__dirname,"..","upload", imageName);
//         if (!fs.existsSync(imageFile)){
//             imageFile = locations.notFoundImageFile;
// }
//         // Success: 
//         response.sendFile(imageFile);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });


module.exports = router;