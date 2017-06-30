import { createStore } from 'redux';
import RootReducer from '../RootReducer';
import { defaultRecipes } from '../Recipes';

let store = createStore(RootReducer);

describe('Root Reducer smoke test', () => {
  test('Check initial state is defaultRecipes given empty action', () => {
    expect(store.getState().recipes).toEqual(defaultRecipes);
  });
});
