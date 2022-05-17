// product.controller.js
// module.exports.index = (request, response) => {
//     response.json({
//        message: "Success!"
//     });
// }

const {Product} = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(error => response.json(error))
}

// Get one thing
module.exports.getOneProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product=> response.json(product))
        .catch(err => response.json(err))
}

module.exports.createProduct = (request, response) => {
    const {title, price, desc} = request.body;
    Product.create({
        title,
        price,
        desc
    })
    .then (product => response.json(product))
    .catch(error => response.json(error))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(error => response.json(error))
        
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
