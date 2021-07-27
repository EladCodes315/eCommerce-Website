const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controllers/productController');

//GET Requst to all products from DB
router.get('/', getAllProducts);

//GET Requst to a product by id from DB
router.get('/:id', getProductById);

module.exports = router;
