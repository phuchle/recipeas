import { combineReducers } from 'redux';
import Recipes from './Recipes';

const RootReducer = combineReducers({
  recipes: Recipes
});

export default RootReducer;
