const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require('http');
const socketIo = require('socket.io');

require('dotenv').config();

const connectDB = require('../db');
connectDB(process.env.MONGO_URI);

const corsOptions = {
  origin: [process.env.CORS_CLIENT_URL, 'http://localhost:5173'],
  methods: ['GET', 'PATCH', 'POST', 'DELETE'],
  optionsSuccessStatus: 200,
  credentials: true,
};

const { PORT } = process.env;

const app = express();
const server = http.createServer(app);
const io = socketIo(server, corsOptions);

const auth = require('../routes/api/auth');
const users = require('../routes/api/users');
const products = require('../routes/api/products');
const messages = require('../routes/api/messages');

const socket = require('../socket/messages');

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/auth', auth);
app.use('/users', users);
app.use('/products', products);
app.use('/messages', messages);
io.on('connection', socket(io));

server.listen(PORT);
