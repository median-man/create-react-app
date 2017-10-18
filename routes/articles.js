// router and controller for articles api
// =================================================
const Article = '../models/Article';

module.exports = {
  // Returns a promise for all saved articles
  getSaved: (req, res) => {
    // TODO define getSaved
  },

  // Adds article to the database and sends response. Returns promise.
  save: (req, res) => {
    // save title, url, and date properties from request body
    return Article.create(req.body)
      .then(() => res.send('Article was saved succesfully'))
      .catch((error) => {
        res
          .status(400)
          .json({
            message: error.message,
            error,
          });
      });
  },

  // Returns a promise to delete an article
  delete: (req, res) => {
    // TODO delete
  },
};
