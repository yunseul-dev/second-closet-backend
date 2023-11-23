const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require('http');
const socketIo = require('socket.io');

require('dotenv').config();

const corsOptions = {
  origin: process.env.CORS_CLIENT_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};

const { PORT } = process.env;

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

const auth = require('./routes/api/auth');
const users = require('./routes/api/users');
const products = require('./routes/api/products');
const messages = require('./routes/api/messages');
const socket = require('./socket/messages');

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/products', products);
app.use('/api/messages', messages);
io.on('connection', socket(io));

server.listen(PORT);
