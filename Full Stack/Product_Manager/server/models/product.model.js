const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        error:"Title is Required",
        minlength: 3
    },
    price: {
        type:Number,
        required : true,
        error : "Price Required",
        min : 0
    },
    desc: {
        type:String,
        required : true,
        error : "Description Required",
        minlength: 1
    },
}, {timestamps:true});

module.exports.Product = mongoose.model('Product', ProductSchema);

// const mongoose = require('mongoose');
// const TestSchema = new mongoose.Schema({
//     name: {type:String},
//     value: {type:Number},
//     etc: {type:Array},
//     random: {type:Boolean},
//     updated: {type: Date, default: Date.now}
// }, {timestamps:true});

// module.exports.Test = mongoose.model('Test', TestSchema);