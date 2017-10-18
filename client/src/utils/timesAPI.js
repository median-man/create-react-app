import axios from 'axios';

export default function searchNYT(searchTerm, startYear = 0, endYear = 0) {
  const apiEndpoint = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
  const params = {
    'api-key': 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931',
    q: searchTerm,
  };

  if (startYear) params.startYear = startYear;
  if (endYear) params.endYear = endYear;

  return axios
    .get(apiEndpoint, { params })
    .then(response => response.data.response.docs);
}
