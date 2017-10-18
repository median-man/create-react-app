// all server routes
// =================================================
const Article = '../models/Article';

module.exports = {
  // Returns a promise for all saved articles
  all: (req, res) => {
    // TODO define getSaved
  },

  // Adds article to the database and sends response. Returns promise.
  save: (req, res) => {
    // save title, url, and date properties from request body
    return Article.create(req.body)
      .then(articleModel => res.json(articleModel))
      .catch(error => res.status(422).json(error));
  },

  // Returns a promise to delete an article
  delete: (req, res) => {
    // TODO delete
  },
};
