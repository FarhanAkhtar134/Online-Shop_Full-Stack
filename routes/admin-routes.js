const express = require("express");

const adminController = require('../controllers/admin-controller');
const imageUploadMiddleware = require('../middlewares/image-upload'); 



const router = express.Router();

router.get("/products", adminController.getProducts);

router.get("/products/new", adminController.getNewProduct );

router.post('/products', imageUploadMiddleware , adminController.createNewProduct);

router.get('/products/:productId', adminController.getUpdateProduct); 

router.post('/products/:productId', imageUploadMiddleware, adminController.updateProduct); 

router.delete('/products/:productId', adminController.deleteProduct); 

router.get("/orders", adminController.getOrders);

router.patch("/orders/:id", adminController.updateOrder);

module.exports = router;
