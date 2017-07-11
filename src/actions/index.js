export const ADD_RECIPE =  'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const REMOVE_RECIPE =  'REMOVE_RECIPE';

export const addRecipe = recipe => {
  return {
    type: ADD_RECIPE,
    recipe: recipe
  }
}

export const editRecipe = (targetTitle, recipe) => {
  return {
    type: EDIT_RECIPE,
    targetTitle: targetTitle,
    recipe: recipe
  }
}

export const removeRecipe = recipeTitle => {
  return {
    type: REMOVE_RECIPE,
    recipeTitle: recipeTitle
  }
}
