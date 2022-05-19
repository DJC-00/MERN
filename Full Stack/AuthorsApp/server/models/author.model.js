//  Author.model.js
const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
		type:String,
        required:[true,"Author Name is Required"],
        minlength: [3,"Name must contain at least 3 characters"],
			}
}, {timestamps:true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author 