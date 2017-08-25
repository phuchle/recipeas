import { addRecipe, editRecipe, removeRecipe } from '../';
import { ADD_RECIPE, EDIT_RECIPE, REMOVE_RECIPE } from '../actionTypes';
import { v4 } from 'uuid';

describe('Actions', () => {
  test('creates an action to add a recipe', () => {
    const recipeObject = {
      title: 'Hamburger',
      ingredients: 'Ground Beef, Bread, Lettuce, Tomato'
    };

    expect(addRecipe(recipeObject)).toHaveProperty('type', ADD_RECIPE);
    expect(addRecipe(recipeObject)).toHaveProperty('recipe');
    expect(addRecipe(recipeObject)).toHaveProperty('recipe.id');
    expect(Object.keys(addRecipe(recipeObject)).length).toBe(2);
  });

  test('creates an action to edit a recipe', () => {
    const recipeObject =   {
      title: 'Spaghetti',
      ingredients: 'Noodles, Pasta Sauce, Meatballs'
    };
    const targetId = v4();
    const expectedAction = {
      type: EDIT_RECIPE,
      id: targetId,
      recipe: recipeObject
    };
    expect(editRecipe(targetId, recipeObject)).toEqual(expectedAction);
  });

  test('creates an action to remove a recipe', () => {
    const targetId = v4();
    const expectedAction = {
      type: REMOVE_RECIPE,
      id: targetId
    };
    expect(removeRecipe(targetId)).toEqual(expectedAction);
  });
});
