// thing.router.js
const ProductCtrl= require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductCtrl.index);
    app.post('/api/newProduct', ProductCtrl.createProduct)
}