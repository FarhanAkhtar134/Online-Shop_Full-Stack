const express = require("express");

const router = express.Router();

router.get('/products', function (req,res) {

    res.render('cutomer/products/all-products');

} ); 



module.exports = router;
