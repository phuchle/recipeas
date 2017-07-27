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

export const searchFoodDescription = (query) => {
  return axios.get(searchURL, {
    params: {
      ...params,
      q: query
    }
  })
  .then(response => response.data.list.item)
  .catch(error => console.log(error));

};

const searchNutrientInfo = (foodKey) => {

};
