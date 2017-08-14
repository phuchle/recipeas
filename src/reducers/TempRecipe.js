import { v4 } from 'uuid';
import {
  ACTIVATE_EDIT_MODE,
  MODIFY_TEMP_TITLE,
  LOAD_STORED_RECIPE,
  ADD_TEMP_INGREDIENT,
  EDIT_TEMP_INGREDIENT,
  REMOVE_TEMP_INGREDIENT,
  CLEAR_TEMP_RECIPE
} from '../actions';

const initialTempRecipe = {
  titleDetails: {
    title: '',
    servings: '',
    allergens: '',
  },
  ingredients: [],
  id: v4(),
  editMode: false
};

const TempRecipe = (state = initialTempRecipe, action) => {
  switch(action.type) {
    case ACTIVATE_EDIT_MODE:
      return Object.assign({}, state, {
        editMode: true
      });
    // works for adding or editing
    case MODIFY_TEMP_TITLE:
      return Object.assign({}, state, {
        titleDetails: action.titleDetails
      });
    case LOAD_STORED_RECIPE:
      return Object.assign({}, state, action.recipe);
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
      return initialTempRecipe;
    default:
      return state;
  }
};

export default TempRecipe;
