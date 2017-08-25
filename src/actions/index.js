import { v4 } from 'uuid';
import * as actionTypes from './actionTypes';

export const addRecipe = recipe => {
  return {
    type: actionTypes.ADD_RECIPE,
    recipe
  };
};

export const editRecipe = (id, recipe) => {
  return {
    type: actionTypes.EDIT_RECIPE,
    recipe: recipe,
    id: id
  };
};

export const removeRecipe = id => {
  return {
    type: actionTypes.REMOVE_RECIPE,
    id: id
  };
};

export const activateEditMode = () => {
  return {
    type: actionTypes.ACTIVATE_EDIT_MODE
  };
};

// works for adding or editing
export const modifyTempTitle = details => {
  return {
    type: actionTypes.MODIFY_TEMP_TITLE,
    titleDetails: details
  };
};

export const loadStoredRecipe = recipe => {
  return {
    type: actionTypes.LOAD_STORED_RECIPE,
    recipe
  };
};

export const addTempIngredient = ingredient => {
  return {
    type: actionTypes.ADD_TEMP_INGREDIENT,
    ingredient: { ...ingredient, id: v4() }
  };
};

export const editTempIngredient = (id, ingredient) => {
  return {
    type: actionTypes.EDIT_TEMP_INGREDIENT,
    ingredient: ingredient,
    id: id
  };
};

export const removeTempIngredient = id => {
  return {
    type: actionTypes.REMOVE_TEMP_INGREDIENT,
    id: id
  };
};

export const clearTempRecipe = () => {
  return {
    type: actionTypes.CLEAR_TEMP_RECIPE,
  };
};

export const addSearchIngredientResults = results => {
  return {
    type: actionTypes.ADD_SEARCH_INGREDIENT_RESULTS,
    results: results
  };
};

export const clearSearchIngredientResults = () => {
  return {
    type: actionTypes.CLEAR_SEARCH_INGREDIENT_RESULTS
  };
};
