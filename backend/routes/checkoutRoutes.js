require('dotenv').config();

const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

router.post('/', async (req, res) => {
	const cartItems = req.body.map(product => {
		return { name: product.name, priceInCents: product.price * 100, quantity: product.quantity };
	});

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: [ 'card' ],
			mode: 'payment',
			line_items: cartItems.map(item => {
				return {
					price_data: {
						currency: 'usd',
						product_data: {
							name: item.name
						},
						unit_amount: item.priceInCents
					},
					quantity: item.quantity
				};
			}),
			success_url: 'http://localhost:3000/',
			cancel_url: 'http://localhost:3000/cart'
		});
		res.json({ url: session.url });
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

module.exports = router;
