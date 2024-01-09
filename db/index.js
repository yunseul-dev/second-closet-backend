const mongoose = require('mongoose');

const connectDB = url => {
  return mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('몽고DB에 연결되었습니다.'))
    .catch(error => console.error('몽고DB 연결 실패:', error));
};

module.exports = connectDB;
