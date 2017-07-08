import Recipes, { defaultRecipes } from '../Recipes';
import { addRecipe, removeRecipe } from '../../actions/index';


describe('Recipes', () => {
  test('Creates action to add recipe', () => {
    const testRecipe = {
      title: 'BLT',
      ingredients: 'Bacon, Lettuce, Tomato'
    };
    const action = addRecipe(testRecipe);
    ;
    const expectedState = [
      ...defaultRecipes,
      action.recipe
    ]

    expect(Recipes(defaultRecipes, action)).toEqual(expectedState);
  });

  test('Creates an action to remove recipe', () => {
    const testRecipe = {
      title: 'Spaghetti',
      ingredients: 'Noodles, Pasta Sauce, Meatballs'
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
      ingredients: 'Noodles, Pasta Sauce, Meatballs'
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
