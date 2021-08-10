const express = require('express');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/productRoutes');
const accountRoutes = require('./routes/accountRoutes');
const authRoutes = require('./routes/authRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');

require('./configs/database');

app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);
app.use('/accounts', accountRoutes);
app.use('/login', authRoutes);
app.use('/checkout', checkoutRoutes);

app.listen(4000, () => console.log('Server is running on port: 4000'));
