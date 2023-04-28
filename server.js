const express = require("express")
const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://darkeh1807:alisajunior@cluster0.gyzovmf.mongodb.net/?retryWrites=true&w=majority";
const server = express()
const bodyParser = require("body-parser")
const Student = require("./models/student")
const Grocery = require("./models/grocery")
server.use(bodyParser.json());

//GET ALL STUDENTS
// server.get("/students", async (req, res) => {
//     try {
//         const student = await Student.find();
//         res.send(student)

//     } catch (error) {
//         res.send(error)
//     }
// })

// server.get("/students/:id", async (req, res) => {
//     try {
//         const student = await Student.findOne({ id: req.params.id });
//         if (!student) {
//             return res.send("Student does not exist")
//         }
//         res.send(student)
//     } catch (error) {
//         res.send(error)
//     }

// })

//POST STUDENT
// server.post("/students", async (req, res) => {
//     const student = new Student(req.body);
//     try {
//         await student.save()
//         console.log("Student created successfully")
//         res.send(student);
//     } catch (error) {
//         res.send(error)
//     }
// })
server.get("/groceries", async (req, res) => {
    try {
        const grocery = await Grocery.find({},{_id: 0, __v: 0});
        res.send(grocery);
    } catch (error) {
        res.send(error);
    }
})

server.post("/groceries", async (req, res) => {
    const grocery = new Grocery(req.body)
    try {
        await grocery.save();
        console.log("Grocery added successfully")
    } catch (error) {
        console.log(error)
    }
})

mongoose.set('strictQuery', false);
mongoose.connect(DB_URL, { useNewUrlParser: true }).then(
    function () {
        console.log("Database is connected successfully");
    }
).catch(
    function (e) {
        console.log(e)
    }
)

//START SERVER
const PORT = process.env.PORT || 2000;
server.listen(PORT, function () {
    console.log(`Server is running at port ${PORT}`);

})

