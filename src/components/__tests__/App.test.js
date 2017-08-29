import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { defaultRecipes } from '../../reducers/Recipes';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

const store = configureStore()({
  recipes: defaultRecipes
});

describe ('App', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const tree = toJson(wrapper);

    expect(tree).toMatchSnapshot();
  });
});
