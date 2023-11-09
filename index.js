const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');
var http = require('http').Server(app);


const uri = process.env.MONGODBURI;
const port = 3000;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Increase the server selection timeout
})
  .then(() => {
    console.log('Connected to the database');
    http.listen(port, () => {
      console.log('server is running on 3000');
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
