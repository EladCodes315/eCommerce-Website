require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/database');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
