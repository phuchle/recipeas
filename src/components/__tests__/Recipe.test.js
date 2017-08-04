import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Recipe from '../Recipe';
import { defaultRecipes } from '../../reducers/Recipes';
import RootReducer from '../../reducers/RootReducer';
import { removeRecipe } from '../../actions/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const title = 'BLT';

const ingredientsList = 'Bread, Bacon, Lettuce, Tomato'.split(',')
.map(ingredient => {
  return (
    <li className="list-group-item" key={title + ingredient}>
      { ingredient }
    </li>
  );
});

const props = {
  title: title,
  ingredients: ingredientsList,
  id: 'some-id',
  removeRecipe: jest.fn(),
  showEditRecipe: jest.fn(),
  fillEditRecipeModal: jest.fn()
};

const setup = () => {
  const enzymeWrapper = shallow(<Recipe {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('Recipe', () => {
  test('Renders without errors', () => {
    const component = renderer.create(<Recipe { ...props }/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render self with correct HTML', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('h4').text()).toBe(title);

    expect(enzymeWrapper.find('ul').contains(ingredientsList)).toEqual(true);

  });

  test('Delete button on Recipe removes itself from state', () => {
    const mockStore = createStore(RootReducer);

    const mountedProps = {
      title: mockStore.getState().recipes[0].title,
      ingredients: [ ...mockStore.getState().recipes[0].ingredients ],
      id: mockStore.getState().recipes[0].id,
      removeRecipe: (id) => mockStore.dispatch(removeRecipe(id)),
      showEditRecipe: jest.fn(),
      fillEditRecipeModal: jest.fn()
    };

    const wrapper = mount(
      <Provider store={mockStore}>
        <Recipe { ...mountedProps } />
      </Provider>
    );

    const expectedState = defaultRecipes.filter(recipe => {
      return recipe.id !== mountedProps.id;
    });

    wrapper.find('.delete-recipe').simulate('click');

    expect(mockStore.getState().recipes).toEqual(expectedState);
  });
});
