import axios from 'axios';

const articlesAPI = {
    delete: (articleId) => {},
    get: () => {},
    save: (article) => {
        // TODO return a promise for saving the article
        console.log('TODO: send request to save the article', article);
    },
};

export default articlesAPI;
