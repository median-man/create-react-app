import axios from 'axios';

const apiPath = '/api/saved';

const articlesAPI = {
  delete: (articleId) => {},

  // send request to get all saved articles
  get: () => {
    return axios.get(apiPath)
      // TODO add handling for errors
      .then(({ data }) => {
        return data.map((article) => {
          return {
            headline: article.title,
            url: article.url,
            id: article._id,
            pub_date: article.pub_date,
            dateAdded: article.date,
          }
        });
      });
  },

  // send request to add an article to db
  save: (title, url, pub_date, snippet) => {
    // TODO add handling for error responses
    return axios.post(apiPath, { title, url, pub_date, snippet });
  },
};

export default articlesAPI;
