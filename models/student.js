const mongoose = require("mongoose")

//CREATE STUDENT MODEL
const studentSchema = mongoose.model("student", {
    id: Number,
    name: String,
    level: String,
    programme: String,
    hall: String
});


module.exports = studentSchema;//EXPORT STUDENT MODEL
