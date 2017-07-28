import axios from 'axios';

const apiKey = 'KKw8ffPvdVzSenGfPq7BdBi9SlwohNzj4PAtl3uT';

export const searchFoodDescription = (query) => {
  const searchURL = 'https://api.nal.usda.gov/ndb/search/';

  const params = {
    format: 'json',
    sort: 'r',
    max: 25,
    offset: 0,
    api_key: apiKey
  };
  return axios.get(searchURL, {
    params: {
      ...params,
      q: query
    }
  })
  .then(response => response.data.list.item)
  .catch(error => console.log(error));

};

export const searchNutrientInfo = (foodKey) => {
  const nutrients = [
    '208', // kcal
    '203', // protein
    '204', // fat
    '205', // carbohydrate
    '328', // vitamin D
    '418', // vitamin B12
    '301', // calcium
    '303', // iron
    '309', // zinc
    '629', // omega-3 EPA
    '851', // omega-3 ALA
    '621', // omega-3 DHA (unfortunately unavailable as one)
  ];
  const searchURL = 'https://api.nal.usda.gov/ndb/nutrients/?'
    + 'api_key='    + apiKey
    + '&nutrients=' + nutrients[0]
    + '&nutrients=' + nutrients[1]
    + '&nutrients=' + nutrients[2]
    + '&nutrients=' + nutrients[3]
    + '&nutrients=' + nutrients[4]
    + '&nutrients=' + nutrients[5]
    + '&nutrients=' + nutrients[6]
    + '&nutrients=' + nutrients[7]
    + '&nutrients=' + nutrients[8]
    + '&nutrients=' + nutrients[9]
    + '&nutrients=' + nutrients[10]
    + '&nutrients=' + nutrients[11]
    + '&ndbno=' + foodKey
  return axios.get(searchURL)
  .then(response => response.data.report.foods[0])
  .catch(error => console.log(error));
};
