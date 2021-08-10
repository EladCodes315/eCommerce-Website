const { default: axios } = require('axios');
const Product = require('./models/Product');

require('./configs/database');

const importData = async () => {
	try {
		await Product.deleteMany({});
		let productsFromApi = (await axios.get('https://fakestoreapi.com/products')).data;
		let productsToDB = productsFromApi.map(product => {
			let newProduct = {
				name: product.title,
				price: product.price,
				description: product.description,
				category: product.category,
				imageUrl: product.image,
				countInStock: Math.floor(Math.random() * (11 - 1) + 1)
			};
			return newProduct;
		});
		await Product.insertMany(productsToDB);
		console.log('Data import SUCCEEDED!');
		process.exit();
	} catch (error) {
		console.error('Data import FAILED!');
		process.exit(1);
	}
};

importData();
