// Article model
// ==============
const mongoose = require('mongoose');

const { Schema } = mongoose;

// model definition
const articleSchema = new Schema({
  // title, a string, must be entered
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } },
  },
  // url, a string, must be entered
  url: {
    type: String,
    required: true,
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the Headline model using the headlineSchema
const Article = mongoose.model('Article', articleSchema);

// Export the Headline model
module.exports = Article;
