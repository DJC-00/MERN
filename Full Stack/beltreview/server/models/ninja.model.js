const mongoose = require("mongoose");

const NinjaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name contain at least two characters long"]
    },
    numProjects: {
        type: Number,
        required: [true, "Number of Projects is required"],
        min: [0, "Value must be greater than 0"]
    },
    gradDate: {
        type: Date,
        required: [true, "Graduation Date is required"],
        min: ['2014-01-01', "Date cannot be before 2014"]
    },
    isVeteran: {
        type: Boolean
    }

}, {timestamps:true})

const Ninja = mongoose.model("Ninja", NinjaSchema)

module.exports = Ninja;