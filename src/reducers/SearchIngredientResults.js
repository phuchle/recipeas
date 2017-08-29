import {
  ADD_SEARCH_INGREDIENT_RESULTS,
  CLEAR_SEARCH_INGREDIENT_RESULTS
} from '../actions/actionTypes';

const searchIngredientResults = (state = {}, action) => {
  switch (action.type) {
    case ADD_SEARCH_INGREDIENT_RESULTS:
      return Object.assign({}, state, action.results);
    case CLEAR_SEARCH_INGREDIENT_RESULTS:
      return {};
    default:
      return state;
  }
};

export default searchIngredientResults;
