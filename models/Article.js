// Article model
// ==============
const mongoose = require('mongoose');

const { Schema } = mongoose;

// model definition
const articleSchema = new Schema({
  // title, a string, must be entered
  title: {
    type: String,
    required: true,
    unique: { index: { unique: true } },
  },
  // url, a string, must be entered
  url: {
    type: String,
    required: true,
  },
  // date articles was published
  pub_date: {
    type: String,
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now,
  },
  // snippet of text from article
  snippet: {
    type: String,
    required: false,
  },
});

// Create the Article model using the articleSchema
const Article = mongoose.model('Article', articleSchema);

// Export the Headline model
module.exports = Article;
