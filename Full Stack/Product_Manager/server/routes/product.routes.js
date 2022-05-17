// thing.router.js
const ProductCtrl= require('../controllers/product.controller');
module.exports = function(app){

// Get --------------------------------------------------
    app.get('/api', ProductCtrl.index);
    app.get('/api/product/:id', ProductCtrl.getOneProduct);
    app.get('/api/products', ProductCtrl.getAllProducts);

// Post -------------------------------------------------
    app.post('/api/newProduct', ProductCtrl.createProduct)

// Put -------------------------------------------------
    app.put('/api/product/:id', ProductCtrl.updateProduct)

// Delete -----------------------------------------------
    app.delete('/api/product/:id', ProductCtrl.deleteProduct)

}