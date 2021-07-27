require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./configs/database');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
	try {
		await Product.deleteMany({});

		await Product.insertMany(productsData);

		console.log('Data import SUCCEEDED!');
		process.exit();
	} catch (error) {
		console.error('Data import FAILED!');
		process.exit(1);
	}
};

importData();
