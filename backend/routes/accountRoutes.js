const express = require('express');
const router = express.Router();
const { getAllAccounts, getAccountById, addUser, updateCart } = require('../controllers/accountController');

//GET Requst to all accounts from DB
router.get('/', getAllAccounts);

//GET Requst to a account by id from DB
router.get('/:id', getAccountById);

router.post('/', addUser);

router.put('/:id', updateCart);

module.exports = router;
