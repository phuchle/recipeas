import React from 'react';
import { shallow } from 'enzyme';
import Recipe from '../Recipe';

const title = 'BLT';

const ingredientsList = 'Bread, Bacon, Lettuce, Tomato'.split(',').map(ingredient => {
  return (
    <li className="list-group-item" key={title + ingredient}>
      { ingredient }
    </li>
  );
});

const setup = () => {
  const props = {
    title: title,
    ingredients: ingredientsList,
    removeRecipe: jest.fn()
  };

  const enzymeWrapper = shallow(<Recipe {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Recipe', () => {
  test('renders without errors', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.recipe-container')).toHaveLength(1);
  });

  test('should render self with correct HTML', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('h4').text()).toBe(title);

    expect(enzymeWrapper.find('ul').contains(ingredientsList)).toEqual(true);

  });
  test('clicks delete correctly', () => {
    const { enzymeWrapper } = setup();
    enzymeWrapper.find('button').simulate('click');
    expect(enzymeWrapper.unrendered.props.removeRecipe.mock.calls.length).toBe(1);
  });
});
