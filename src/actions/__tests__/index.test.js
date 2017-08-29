import * as actionCreators from '../';
import * as actionTypes from '../actionTypes';
import { v4 } from 'uuid';

describe('Creates an action to...', () => {
  test('add a recipe', () => {
    const recipeObject = {
      title: 'Hamburger',
      ingredients: 'Ground Beef, Bread, Lettuce, Tomato'
    };

    expect(actionCreators.addRecipe(recipeObject)).toHaveProperty('type', actionTypes.ADD_RECIPE);
    expect(actionCreators.addRecipe(recipeObject)).toHaveProperty('recipe');
    expect(Object.keys(actionCreators.addRecipe(recipeObject)).length).toBe(2);
  });

  test('edit a recipe', () => {
    const id = v4();
    const recipe = {
      title: 'Spaghetti',
      ingredients: 'Noodles, Pasta Sauce, Meatballs',
    };
    const expectedAction = {
      type: actionTypes.EDIT_RECIPE,
      recipe: recipe,
      id
    };
    expect(actionCreators.editRecipe(id, recipe)).toEqual(expectedAction);
  });

  test('remove a recipe', () => {
    const targetId = v4();
    const expectedAction = {
      type: actionTypes.REMOVE_RECIPE,
      id: targetId
    };
    expect(actionCreators.removeRecipe(targetId)).toEqual(expectedAction);
  });

  test('activate edit mode', () => {
    expect(actionCreators.activateEditMode()).toEqual({
      type: actionTypes.ACTIVATE_EDIT_MODE
    });
  });

  test('modify the temp title', () => {
    const titleDetails = {
      title: 'Test1',
      servings: '1',
      allergens: 'Nuts'
    };
    const expectedAction = {
      type: actionTypes.MODIFY_TEMP_TITLE,
      titleDetails
    };

    expect(actionCreators.modifyTempTitle(titleDetails)).toEqual(expectedAction);
  });

  test('load a stored recipe', () => {
    const recipe = {
      title: 'Hamburger',
      ingredients: 'Ground Beef, Bread, Lettuce, Tomato',
      id: v4()
    };
    const expectedAction = {
      type: actionTypes.LOAD_STORED_RECIPE,
      recipe
    };

    expect(actionCreators.loadStoredRecipe(recipe)).toEqual(expectedAction);
  });

  test('add temp ingredient', () => {
    const ingredient = {
      name: 'Skippy Extra Crunchy Peanut Butter',
      measure: '2.0 Tbsp',
      macronutrients: [],
      micronutrients: [],
      servings: 1,
      id: v4()
    };
    const expectedAction = {
      type: actionTypes.ADD_TEMP_INGREDIENT,
      ingredient
    };

    expect(actionCreators.addTempIngredient(ingredient)).toEqual(expectedAction);
  });

  test('edit a temp ingredient', () => {
    const id = v4();
    const ingredient = {
      name: 'Skippy Extra Crunchy Peanut Butter',
      measure: '2.0 Tbsp',
      macronutrients: [],
      micronutrients: [],
      servings: 1,
      id: v4()
    };
    const expectedAction = {
      type: actionTypes.EDIT_TEMP_INGREDIENT,
      ingredient,
      id
    };

    expect(actionCreators.editTempIngredient(id, ingredient))
      .toEqual(expectedAction);
  });

  test('remove a temp ingredient', () => {
    const id = v4();
    const expectedAction = {
      type: actionTypes.REMOVE_TEMP_INGREDIENT,
      id
    };

    expect(actionCreators.removeTempIngredient(id)).toEqual(expectedAction);
  });

  test('clear the temp recipe', () => {
    expect(actionCreators.clearTempRecipe())
      .toEqual({ type: actionTypes.CLEAR_TEMP_RECIPE});
  });

  test('add a search ingredient result', () => {
    const results = [{name: 'testRestult'}];
    const expectedAction = {
      type: actionTypes.ADD_SEARCH_INGREDIENT_RESULTS,
      results
    };

    expect(actionCreators.addSearchIngredientResults(results)).toEqual(expectedAction);
  });

  test('clear search ingredient results', () => {
    const expectedAction = {
      type: actionTypes.CLEAR_SEARCH_INGREDIENT_RESULTS
    };
    expect(actionCreators.clearSearchIngredientResults())
      .toEqual(expectedAction);
  });
});
