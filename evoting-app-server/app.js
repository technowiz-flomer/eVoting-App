const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const staffRoutes = require('./routes/staffRoutes')
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/', staffRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

module.exports = app;
