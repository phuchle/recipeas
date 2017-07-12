import LocalStorageMock from '../__mocks__/LocalStorageMock';
import { loadState, saveState } from '../localStorage';
import { defaultRecipes } from '../../reducers/Recipes';
import configureStore from 'redux-mock-store';


describe('Local storage methods', () => {
  beforeEach(() => {
    global.localStorage = new LocalStorageMock();
  });

  test('Saves state properly', () => {
    const store = configureStore()({
      recipes: defaultRecipes
    });
    const serializedState = JSON.stringify(store.getState());
    saveState(store.getState());
    const expectedStorage = {
      store: {
        state: serializedState
      }
    }

    expect(global.localStorage).toEqual(expectedStorage);
  });

  test('Returns undefined for null saved state', () => {
    const serializedState = localStorage.getItem('state');

    expect(serializedState).toEqual(undefined);
  });

  test('Returns state correctly when present in localStorage', () => {
    const store = configureStore()({
      recipes: defaultRecipes
    });
    saveState(store.getState());
    const expectedState = {
      recipes: defaultRecipes
    };

    expect(loadState()).toEqual(expectedState);
  });
});
