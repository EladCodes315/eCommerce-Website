const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { default: axios } = require('axios');

router.post('/', async (req, res) => {
	let { data } = await axios.get('http://localhost:4000/accounts');
	let account = data.find(user => user.username === req.body.username);
	if (account == null) {
		return res.json({ message: 'User Not Found' });
	}
	try {
		if (await bcrypt.compare(req.body.password, account.password)) {
			res.json({ account });
		}
		else {
			res.json({ message: 'Invalid Password' });
		}
	} catch (error) {
		console.error(error);
		res.json({ message: 'Server Error' });
	}
});

module.exports = router;
