const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const articles = require('./controllers/articles.js');

const PORT = process.env.PORT || 3001;
const app = express();

// configure express
// ==========================================================
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(bodyParser.json());

// server routes
// ==========================================================


// TODO remove healthceck route
app.get('/healthcheck', (req, res) => {
  res.json({ success: true, status: 200 });
});

// Send every request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Connect to database
// ==========================================================
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/nytSearch';
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, { useMongoClient: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
