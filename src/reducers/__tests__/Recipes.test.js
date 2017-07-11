import Recipes, { defaultRecipes } from '../Recipes';
import { addRecipe, editRecipe, removeRecipe } from '../../actions/index';


describe('Recipes', () => {
  test('Adds a new recipe to state', () => {
    const testRecipe = {
      title: 'BLT',
      ingredients: 'Bacon, Lettuce, Tomato',
      open: false
    };
    const action = addRecipe(testRecipe);
    ;
    const expectedState = [
      ...defaultRecipes,
      action.recipe
    ]

    expect(Recipes(defaultRecipes, action)).toEqual(expectedState);
  });

  test('Edits target recipe with new ingredients', () => {
    const newRecipe = {
      title: 'Spaghetti',
      ingredients: 'Noodles, Parmesean, Chicken',
      open: false
    };
    const targetTitle = 'Spahgetti';
    const action = editRecipe(targetTitle, newRecipe);
    const expectedState = defaultRecipes.map(recipe => {
      return recipe.title === targetTitle ? newRecipe : recipe;
    });

    expect(Recipes(defaultRecipes, action)).toEqual(expectedState);
  });

  test('Edits existing recipe with new title', () => {
    const newRecipe = {
        title: 'Parm',
        ingredients: 'Noodles, Parmesean, Chicken',
        open: false
      };
    const targetTitle = 'Spaghetti';
    const action = editRecipe(targetTitle, newRecipe);
    const expectedState = defaultRecipes.map(recipe => {
      return recipe.title === targetTitle ? newRecipe : recipe;
    });

    expect(Recipes(defaultRecipes, action)).toEqual(expectedState);
  });

  test('Removes target recipe from state', () => {
    const testRecipe = {
      title: 'Spaghetti',
      ingredients: 'Noodles, Pasta Sauce, Meatballs',
      open: false
    };
    const action = removeRecipe(testRecipe.title);
    const expectedState = defaultRecipes.filter(recipe => {
      return recipe.title !== testRecipe.title;
    });

    expect(Recipes(defaultRecipes, action)).toEqual(expectedState);
  });

  test('Does nothing on an unknown action', () => {
    const testRecipe = {
      title: 'Spaghetti',
      ingredients: 'Noodles, Pasta Sauce, Meatballs',
      open: false
    };
    const unknownActionCreator = (recipe) => {
      return {
        type: 'unknown',
        recipe: testRecipe
      }
    };
    const action = unknownActionCreator(testRecipe);
    expect(Recipes(defaultRecipes, action)).toBe(defaultRecipes);
  });
});
