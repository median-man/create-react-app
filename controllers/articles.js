// all server routes
// =================================================
const Article = require('../models/Article');

module.exports = {
  // Returns a promise for all saved articles
  all: (req, res) => {
    return Article.find()
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },

  // Adds article to the database and sends response. Returns promise.
  save: (req, res) => {
    // save title, url, and date properties from request body
    return Article.create(req.body)
      .then(articleModel => res.json(articleModel))
      .catch(error => res.status(400).json(error));
  },

  // Returns a promise to delete an article
  delete: (req, res) => {
    // TODO delete article
  },
};
