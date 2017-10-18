// router and controller for articles api
// =================================================
const path = require('path');
const articles = require('../controllers/articles');

const router = require('express').Router();

// handle saved articles api routes
router.route('/api/saved')
  .get(articles.all)
  .post(articles.save)
  .delete(articles.delete);

// Send React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
