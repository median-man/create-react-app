import axios from 'axios';

const articlesAPI = {
    delete: (articleId) => {},
    get: () => {},
    save: (title, url, pub_date) => {
        // TODO add handling for error responses
        return axios.post('/api/saved', { title, url, pub_date });
    },
};

export default articlesAPI;
