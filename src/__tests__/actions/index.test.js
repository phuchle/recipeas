import { ADD_RECIPE, REMOVE_RECIPE, addRecipe, removeRecipe } from '../../actions';

describe('Actions', () => {
  it('should create an action to add a recipe', () => {
    const recipeObject = {
      title: 'Hamburger',
      ingredients: 'Ground Beef, Bread, Lettuce, Tomato'
    };
    const expectedAction = {
      type: ADD_RECIPE,
      recipe: {
        title: 'Hamburger',
        ingredients: 'Ground Beef, Bread, Lettuce, Tomato'
      }
    };
    expect(addRecipe(recipeObject)).toEqual(expectedAction);
  });

  it('should create an action to remove a recipe', () => {
    const recipeTitle = 'Spaghetti';
    const expectedAction = {
      type: REMOVE_RECIPE,
      recipeTitle: recipeTitle
    };
    expect(removeRecipe(recipeTitle)).toEqual(expectedAction);
  });
});
