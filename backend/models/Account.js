const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	cart: []
});

const Product = mongoose.model('accounts', accountSchema);

module.exports = Product;
