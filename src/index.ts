import express from "express";
import {UserModel } from "./db";




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

const app = express();
app.use(express.json());

app.post("/api/v1/singup", (req, res) => { // new user
    const username = req.body.username;
    const password = req.body.password;

    UserModel.create({
        username: username,
        password: password
    })

    res.json({
        message: "User signed up"
    })
})

app.post("/api/v1/signin", (req,res) => { // old user
    const username = req.body.username;
    const password = req.body.password;

    
})

app.post("/api/v1/content", (req, res) => { // creat a content

})

app.get("/api/v1/content", (req, res) => { // show a content 

})

app.delete("/api/v1/content", (req, res) => { // delete content

})

app.post("/api/v1/brain/share", (req, res)=> { // share brain

})

app.get("/api/v1/brain/:shareLink", (req, res)=> { // see other brain

})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})