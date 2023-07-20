const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api/products', ProductController.AllProducts);
    app.get('/api/products/:id', ProductController.OneProduct);
    app.patch('/api/products/:id', ProductController.updateProduct);
    app.post('/api/products/new', ProductController.newProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}