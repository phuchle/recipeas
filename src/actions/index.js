import { v4 } from 'uuid';

export const ADD_RECIPE =  'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const REMOVE_RECIPE =  'REMOVE_RECIPE';

export const MODIFY_TEMP_TITLE = 'EDIT_TEMP_INGREDIENT';
export const ADD_TEMP_INGREDIENT = 'ADD_TEMP_INGREDIENT';
export const EDIT_TEMP_INGREDIENT = 'EDIT_TEMP_INGREDIENT';
export const REMOVE_TEMP_INGREDIENT = 'REMOVE_TEMP_INGREDIENT';
export const CLEAR_TEMP_RECIPE = 'CLEAR_TEMP_RECIPE';

export const ADD_SEARCH_INGREDIENT_RESULTS = 'ADD_SEARCH_INGREDIENT_RESULTS';
export const CLEAR_SEARCH_INGREDIENT_RESULTS = 'CLEAR_SEARCH_INGREDIENT_RESULTS';

export const addRecipe = recipe => {
  return {
    type: ADD_RECIPE,
    recipe: { ...recipe, id: v4() }
  };
};

export const editRecipe = (id, recipe) => {
  return {
    type: EDIT_RECIPE,
    recipe: recipe,
    id: id
  };
};

export const removeRecipe = id => {
  return {
    type: REMOVE_RECIPE,
    id: id
  };
};

// works for adding or editing
export const modifyTempTitle = (details) => {
  return {
    type: MODIFY_TEMP_TITLE,
    titleDetails: details
  };
};

export const addTempIngredient = (ingredient) => {
  return {
    type: ADD_TEMP_INGREDIENT,
    ingredient: { ...ingredient, id: v4() }
  };
};

export const editTempIngredient = (id, ingredient) => {
  return {
    type: EDIT_TEMP_INGREDIENT,
    ingredient: ingredient,
    id: id
  };
};

export const removeTempIngredient = (id) => {
  return {
    type: REMOVE_TEMP_INGREDIENT,
    id: id
  };
};

export const clearTempRecipe = () => {
  return {
    type: CLEAR_TEMP_RECIPE,
  };
};

export const addSearchIngredientResults = (results) => {
  return {
    type: ADD_SEARCH_INGREDIENT_RESULTS,
    results: results
  };
};

export const clearSearchIngredientResults = () => {
  return {
    type: CLEAR_SEARCH_INGREDIENT_RESULTS
  };
};
