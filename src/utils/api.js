import axios from 'axios';

const apiKey = 'KKw8ffPvdVzSenGfPq7BdBi9SlwohNzj4PAtl3uT';
const searchURL = 'https://api.nal.usda.gov/ndb/search/';

const params = {
  format: 'json',
  sort: 'n',
  max: 25,
  offset: 0,
  api_key: apiKey
};

export const searchIngredient = (query) => {
  axios.get(searchURL, {
    params: {
      ...params,
      query: query
    }
  })
  .then(response => console.log(response))
  .catch(error => console.log(error));
};
