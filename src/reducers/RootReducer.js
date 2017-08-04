import { combineReducers } from 'redux';
import Recipes from './Recipes';
import TempRecipe from './TempRecipe';
import SearchIngredientResults from './SearchIngredientResults';

const RootReducer = combineReducers({
  recipes: Recipes,
  tempRecipe: TempRecipe,
  results: SearchIngredientResults
});

export default RootReducer;
