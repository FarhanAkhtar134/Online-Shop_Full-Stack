const Cart = require('../models/cart-model'); 

function initialzeCart(req, res, next) {
    let cart; 

    if(!req.session.cart) {
        cart = new Cart(); 
    } else{
        cart = new Cart(req.session.cart.items); 

    }

    res.locals.cart = cart; 

    next();


}

module.exports = initialzeCart; 