const express = require("express")
const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://darkeh1807:alisajunior@cluster0.gyzovmf.mongodb.net/?retryWrites=true&w=majority";
const server = express()
const bodyParser = require("body-parser")
const Student = require("./models/student")
const functions = require("firebase-functions");
server.use(bodyParser.json());


mongoose.set('strictQuery', false);
    mongoose.connect(DB_URL, { useNewUrlParser: true }).then(
        function () {
            console.log("Database is connected successfully");
        }
    ).
        catch(
            function (e) {
                console, log(e)
            }
        )
//POST STUDENT
server.post("/students", async (req, res) => {
    const student = new Student(req.body);
    try {
        await student.save()
        console.log("Student created successfully")
        res.send(student);
    } catch (error) {
        res.send(error)
    }
})
//GET ALL STUDENTS
server.get("/students", async (req, res) => {
    try {
        const student = await Student.find();
        res.send(student)

    } catch (error) {
        console.log(error)
    }
})


//GET A SINGLE STUDENT BY ID
server.get("/students/:id", async (req, res) => {
    try {
        const student = await Student.findOne({ id: req.params.id });
        if (!student) {
            return res.send(student)
        }
        res.send(student)
    } catch (error) {
        res.send(error)
    }

})

server.listen( 2000, function () {
    console.log("Server is running at port 2000");
    
})

