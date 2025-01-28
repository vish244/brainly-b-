"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect("mongodb+srv://v87078523:DPwVjZCiS1jQicbz@projectnew.tnlv3.mongodb.net/")
    .then((c) => console.log("DataBase Added with "))
    .catch((e) => console.log(e));
// async function connection() {
//     // await mongoose.connect("mongodb+srv://brainly:HnIBfp3XpCghCCOl@cluster0.8onuc.mongodb.net/");
//     // await mongoose.connect("mongodb://0.0.0.0:27017");
//     try{
//         // await mongoose.connect("mongodb+srv://v87078523:DPwVjZCiS1jQicbz@projectnew.tnlv3.mongodb.net/");
//         // //GedQaTOsQkcSay
//     }catch(err){
//         console.log("Error in connection");
//     }
// }
// connection();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/v1/singup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db_1.UserModel.create({
        username: username,
        password: password
    });
    res.json({
        message: "User signed up"
    });
});
app.post("/api/v1/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
});
app.post("/api/v1/content", (req, res) => {
});
app.get("/api/v1/content", (req, res) => {
});
app.delete("/api/v1/content", (req, res) => {
});
app.post("/api/v1/brain/share", (req, res) => {
});
app.get("/api/v1/brain/:shareLink", (req, res) => {
});
app.listen(3000, () => {
    console.log("server is running on port 3000");
});
