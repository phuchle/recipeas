import axios from 'axios';

const apiKey = 'KKw8ffPvdVzSenGfPq7BdBi9SlwohNzj4PAtl3uT';

export const roundToTwo = (num) => {
  return +(Math.round(num + "e+2")  + "e-2");
};

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
  .then(response => {
    if (response.data.errors) {
      return {
        type: 'error',
        response: response.data.errors.error[0].message
      }
    }
    if (response.data.list.item) {
      return {
        type: 'success',
        response: response.data.list.item
      }
    }
  })
  .catch(error => console.log(error));

};

const sumOmega3 = (nutrients) => {
  const epa = nutrients.find(nutrObj => {
    return nutrObj.nutrient_id === '629';
  });
  const ala = nutrients.find(nutrObj => {
    return nutrObj.nutrient_id === '851';
  });
  const dha = nutrients.find(nutrObj => {
    return nutrObj.nutrient_id === '621';
  });

  const omega3 = roundToTwo(parseFloat(epa.value) + parseFloat(ala.value) + parseFloat(dha.value));

  return {
    name: 'Omega-3 Fatty Acids',
    value: omega3,
    unit: 'g'
  };
};

// returns an array of objects
const formatMicronutrients = (nutrients) => {
  const omega3= sumOmega3(nutrients);
  const nutrientList = nutrients.filter(nutrObj => {
    // filtering out the omega 3s, calories, macronutrients
    if (
      nutrObj.nutrient_id !== '629' // epa
      && nutrObj.nutrient_id !== '851' // ala
      && nutrObj.nutrient_id !== '621' // dha
      && nutrObj.nutrient_id !== '208' // kcal
      && nutrObj.nutrient_id !== '203' // protein
      && nutrObj.nutrient_id !== '204' // fat
      && nutrObj.nutrient_id !== '205' // carbs
    ) {
      return nutrObj;
    }
    return null;
  }).map(nutrObj => {
    // formatting the micronutrient list items
    return {
      name: nutrObj.nutrient,
      value: roundToTwo(nutrObj.value),
      unit: nutrObj.unit
    }
  })

  return [
    omega3,
    ...nutrientList
  ];
};

// returns an array
const formatMacronutrients = (nutrients) => {
  const kcal = nutrients.find(nutrObj => {
    return nutrObj.nutrient_id === '208';
  });
  const protein = nutrients.find(nutrObj => {
    return nutrObj.nutrient_id === '203';
  });
  const fat = nutrients.find(nutrObj => {
    return nutrObj.nutrient_id === '204';
  });
  const carbohydrate = nutrients.find(nutrObj => {
    return nutrObj.nutrient_id === '205';
  });

  const macros = [kcal, protein, fat, carbohydrate].map(macro => {
    let name;
    switch(macro.nutrient_id) {
      case '208':
        name = 'Calories';
        break;
      case '203':
        name = 'Protein'
        break;
      case '204':
        name = 'Fat'
        break;
      case '205':
        name = 'Carbohydrate'
        break;
      default:
        name = macro.nutrient_id;
        break;
    }

    return {
      name: name,
      value: roundToTwo(macro.value),
      unit: macro.unit
    }
  });

  return macros;
};

// returns an object
const formatNutrientResponse = (response) => {
  const nutrients = response.nutrients.map(nutrObj => {
    if (nutrObj.value === '--') {
      nutrObj.value = 0
    }
    return nutrObj;
  });

  const macronutrients = formatMacronutrients(nutrients);
  const micronutrients = formatMicronutrients(nutrients);

  return {
    name: response.name,
    measure: response.measure,
    macronutrients: macronutrients,
    micronutrients: micronutrients
  };
}

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
  .then(response => formatNutrientResponse(response.data.report.foods[0]))
  .catch(error => console.log(error));
};
