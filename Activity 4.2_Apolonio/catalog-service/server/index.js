
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();


connectDB();

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());


app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));


app.get('/', (req, res) => {
    res.send('Product Catalog API is running');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
