import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { RecipesList } from '../RecipesList';
import { defaultRecipes } from '../../reducers/Recipes';
import { removeRecipe } from '../../actions/index';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Button } from 'react-bootstrap';

describe('Recipes List', () => {
  test('Renders without crashing', () => {
    const mockStore = configureStore()({
      recipes: defaultRecipes
    });

    const component = renderer.create(
      <Provider store={mockStore}>
        <RecipesList recipes={defaultRecipes} removeRecipe={removeRecipe} />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Receives default state from store', () => {
    const mockStore = configureStore()({
      recipes: defaultRecipes
    });

    const wrapper = shallow(
      <Provider store={mockStore}>
        <RecipesList recipes={defaultRecipes} removeRecipe={removeRecipe} />
      </Provider>
    );

    expect(wrapper.props().recipes).toEqual(defaultRecipes);
  });

  test('Add recipe button shows AddRecipe modal', () => {
    const wrapper = shallow(
      <RecipesList recipes={defaultRecipes} removeRecipe={removeRecipe} />
    );
    wrapper.find(Button).simulate('click');

    // showAddRecipe controls visibility of AddRecipe modal
    expect(wrapper.state().displayAddRecipe).toEqual(true);
  });

  test('Edit button shows EditRecipe modal', () => {
    const wrapper = mount(
      <RecipesList recipes={defaultRecipes} removeRecipe={removeRecipe} />
    );
    wrapper.find('.edit-recipe').first().simulate('click');

    expect(wrapper.state().displayEditRecipe).toEqual(true);
  });

  // TODO: maybe a delete button test is necessary?
});
