import Recipes, { defaultRecipes } from '../Recipes';
import { addRecipe, editRecipe, removeRecipe } from '../../actions/index';


describe('Recipes', () => {
  test('Adds a new recipe to state', () => {
    const testRecipe = {
      title: 'BLT',
      ingredients: 'Bacon, Lettuce, Tomato'
    };
    const action = addRecipe(testRecipe);
    ;
    const expectedState = [
      ...defaultRecipes,
      action.recipe
    ];

    expect(Recipes(defaultRecipes, action)).toEqual(expectedState);
  });

  test('Edits target recipe with new ingredients', () => {
    const newRecipe = {
      title: 'Spaghetti',
      ingredients: 'Noodles, Parmesean, Chicken'
    };
    const targetId = defaultRecipes[1].id;
    const action = editRecipe(targetId, newRecipe);
    const expectedState = defaultRecipes.map(recipe => {
      return recipe.id === targetId ?
        { id: recipe.id, ...newRecipe }
        : recipe;
    });

    expect(Recipes(defaultRecipes, action)).toEqual(expectedState);
  });

  test('Edits existing recipe with new title', () => {
    const newRecipe = {
        title: 'Parm',
        ingredients: 'Noodles, Parmesean, Chicken'
      };
    const targetId = defaultRecipes[1].id;
    const action = editRecipe(targetId, newRecipe);
    const expectedState = defaultRecipes.map(recipe => {
      return recipe.id === targetId ?
        { id: recipe.id, ...newRecipe }
        : recipe;
    });

    expect(Recipes(defaultRecipes, action)).toEqual(expectedState);
  });

  test('Removes target recipe from state', () => {
    const targetId = defaultRecipes[1].id;
    const action = removeRecipe(targetId);
    const expectedState = defaultRecipes.filter(recipe => {
      return recipe.id !== targetId;
    });

    expect(Recipes(defaultRecipes, action)).toEqual(expectedState);
  });

  test('Does nothing on an unknown action', () => {
    const testRecipe = {
      title: 'Spaghetti',
      ingredients: 'Noodles, Pasta Sauce, Meatballs'
    };
    const unknownActionCreator = (recipe) => {
      return {
        type: 'unknown',
        recipe: testRecipe
      };
    };
    const action = unknownActionCreator(testRecipe);
    expect(Recipes(defaultRecipes, action)).toBe(defaultRecipes);
  });
});
