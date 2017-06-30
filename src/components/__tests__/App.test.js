import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { defaultRecipes } from '../../reducers/Recipes';

const store = configureStore()({
  recipes: defaultRecipes
});

describe ('App', () => {
  test('renders without crashing', () => {
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
