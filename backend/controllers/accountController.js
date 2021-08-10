const Account = require('../models/Account');
const bcrypt = require('bcrypt');

const getAllAccounts = async (req, res) => {
	try {
		let accounts = await Account.find({});
		res.json(accounts);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

const getAccountById = async (req, res) => {
	try {
		let account = await Account.findById(req.params.id);
		res.json(account);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

const addUser = async (req, res) => {
	try {
		let hashedPassword = await bcrypt.hash(req.body.password, 10);
		let newAccount = new Account({ username: req.body.username, password: hashedPassword, cart: [] });
		await newAccount.save();
		res.json(newAccount);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

const updateCart = async (req, res) => {
	try {
		await Account.findByIdAndUpdate(req.params.id, { cart: [ ...req.body ] });
		res.json('User Cart Updated');
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

module.exports = { getAllAccounts, getAccountById, addUser, updateCart };
