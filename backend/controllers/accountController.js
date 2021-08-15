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

const addAccount = async (req, res) => {
	try {
		console.log(req.body);
		let hashedPassword = await bcrypt.hash(req.body.password, 10);
		let newAccount = new Account({
			username: req.body.username,
			password: hashedPassword,
			fullname: req.body.fullname,
			email: req.body.email,
			dateOfBirth: req.body.dateOfBirth,
			cart: []
		});
		await newAccount.save();
		res.json(newAccount);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

const updateAccountUsername = async (req, res) => {
	try {
		await Account.findByIdAndUpdate(req.params.id, { username: req.body.username });
		res.json('Account Name Updated');
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

const updateAccountPassword = async (req, res) => {
	try {
		let hashedPassword = await bcrypt.hash(req.body.password, 10);
		await Account.findByIdAndUpdate(req.params.id, { password: hashedPassword });
		res.json(hashedPassword);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

const updateAccountName = async (req, res) => {
	try {
		await Account.findByIdAndUpdate(req.params.id, { fullname: req.body.fullname });
		res.json('Account Name Updated');
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

const updateAccountEmail = async (req, res) => {
	try {
		await Account.findByIdAndUpdate(req.params.id, { email: req.body.email });
		res.json('Account Email Updated');
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

const updateAccountDate = async (req, res) => {
	try {
		await Account.findByIdAndUpdate(req.params.id, { dateOfBirth: new Date(req.body.dateOfBirth) });
		res.json('Account Date Updated');
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

const updateAccountCart = async (req, res) => {
	try {
		await Account.findByIdAndUpdate(req.params.id, { cart: [ ...req.body ] });
		res.json('Account Cart Updated');
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

const deleteAccount = async (req, res) => {
	try {
		await Account.findByIdAndDelete(req.params.id);
		res.json('Account deleted');
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

module.exports = {
	getAllAccounts,
	getAccountById,
	addAccount,
	updateAccountUsername,
	updateAccountPassword,
	updateAccountName,
	updateAccountEmail,
	updateAccountDate,
	updateAccountCart,
	deleteAccount
};
