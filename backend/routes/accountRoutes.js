const express = require('express');
const router = express.Router();
const {
	getAllAccounts,
	getAccountById,
	addAccount,
	updateAccountUsername,
	updateAccountPassword,
	updateAccountEmail,
	updateAccountName,
	updateAccountDate,
	updateAccountCart,
	deleteAccount
} = require('../controllers/accountController');

//GET Requst to all accounts from DB
router.get('/', getAllAccounts);

//GET Requst to a account by id from DB
router.get('/:id', getAccountById);

router.post('/', addAccount);

router.put('/:id/accountusername', updateAccountUsername);

router.put('/:id/accountpassword', updateAccountPassword);

router.put('/:id/accountname', updateAccountName);

router.put('/:id/accountemail', updateAccountEmail);

router.put('/:id/accountdate', updateAccountDate);

router.put('/:id/accountcart', updateAccountCart);

router.delete('/:id', deleteAccount);

module.exports = router;
