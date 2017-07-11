import { ADD_RECIPE, EDIT_RECIPE, REMOVE_RECIPE, addRecipe, editRecipe, removeRecipe } from '../index';

describe('Actions', () => {
  test('creates an action to add a recipe', () => {
    const recipeObject = {
      title: 'Hamburger',
      ingredients: 'Ground Beef, Bread, Lettuce, Tomato',
      open: false
    };
    const expectedAction = {
      type: ADD_RECIPE,
      recipe: recipeObject
    };
    expect(addRecipe(recipeObject)).toEqual(expectedAction);
  });

  test('creates an action to edit a recipe', () => {
    const recipeObject =   {
      title: 'Spaghetti',
      ingredients: 'Noodles, Pasta Sauce, Meatballs',
      open: false
    };
    const targetTitle = 'Spaghetti';
    const expectedAction = {
      type: EDIT_RECIPE,
      targetTitle: targetTitle,
      recipe: recipeObject
    };
    expect(editRecipe(targetTitle, recipeObject)).toEqual(expectedAction);
  });

  test('creates an action to remove a recipe', () => {
    const recipeTitle = 'Spaghetti';
    const expectedAction = {
      type: REMOVE_RECIPE,
      recipeTitle: recipeTitle
    };
    expect(removeRecipe(recipeTitle)).toEqual(expectedAction);
  });
});
