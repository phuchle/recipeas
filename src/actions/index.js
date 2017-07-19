import { v4 } from 'uuid';

export const ADD_RECIPE =  'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const REMOVE_RECIPE =  'REMOVE_RECIPE';

export const addRecipe = recipe => {
  return {
    type: ADD_RECIPE,
    recipe: { ...recipe, id: v4() }
  }
}

export const editRecipe = (id, recipe) => {
  return {
    type: EDIT_RECIPE,
    recipe: recipe,
    id: id
  }
}

export const removeRecipe = id => {
  return {
    type: REMOVE_RECIPE,
    id: id
  }
}
