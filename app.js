const express = require("express");
const cors = require("cors");

const adminController=require("./controllers-layer/admin-controller");
const authController=require("./controllers-layer/auth-controller");
const mediumController=require("./controllers-layer/medium-controller");


const server = express();
server.use(express.json());
server.use(cors());

server.use("/admin", adminController);
server.use("/auth", authController);
server.use("/medium", mediumController);


server.use("*", (req, res) => {
    res.status(404).send(`Route not found ${req.originalUrl}`);
});

server.listen(4000, () => {
    console.log("Listening on 4000");
}).on("error", (err) => {
    if (err.code === "EADDRINUSE")
        console.log("Error: Address in use");
    else 
        console.log("Error: Unknown error");
});