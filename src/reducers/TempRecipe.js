import {
  MODIFY_TEMP_TITLE,
  ADD_TEMP_INGREDIENT,
  EDIT_TEMP_INGREDIENT,
  REMOVE_TEMP_INGREDIENT,
  CLEAR_TEMP_RECIPE
} from '../actions';

const initialTempRecipe = {
  titleDetails: {
    title: '',
    allergens: '',
    servings: ''
  },
  ingredients: []
};

const TempRecipe = (state = initialTempRecipe, action) => {
  switch(action.type) {
    // works for adding or editing
    case MODIFY_TEMP_TITLE:
      return Object.assign({}, state, action.titleDetails);
    case ADD_TEMP_INGREDIENT:
      return Object.assign({}, state, {
        ingredients: [
          ...state.ingredients,
          action.ingredient
        ]
      });
    case EDIT_TEMP_INGREDIENT:
      return Object.assign({}, state, {
        ingredients: state.ingredients.map(ingredient => {
          return ingredient.id === action.id ?
            { id: ingredient.id, ...action.ingredient }
            : ingredient;
        })
      });
    case REMOVE_TEMP_INGREDIENT:
      return Object.assign({}, state, {
        ingredients: state.ingredients.filter(ingredient => ingredient.id !== action.id)
      });
    case CLEAR_TEMP_RECIPE:
      return {};
    default:
      return state;
  }
};

export default TempRecipe;
