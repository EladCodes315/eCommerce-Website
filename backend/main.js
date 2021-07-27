require('dotenv').config();
const express = require('express');
const connectDB = require('./configs/database');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

app.use(express.json());
app.use('/products', productRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
