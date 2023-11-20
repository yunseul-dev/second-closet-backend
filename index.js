const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const { PORT } = process.env;

const auth = require('./routes/api/auth');
const users = require('./routes/api/users');
const products = require('./routes/api/products');
const messages = require('./routes/api/messages');

const corsOptions = {
  origin: process.env.CORS_CLIENT_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/products', products);
app.use('/api/messages', messages);

app.listen(PORT);
