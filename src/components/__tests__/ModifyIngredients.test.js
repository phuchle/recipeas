import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ModifyIngredients from '../ModifyIngredients';

const props = {
  nextButton: true,
  plusButton: true,
  ingredientList: []
};

describe('ModifyIngredients', () => {
  test('renders without crashing', () => {
    const component = shallow(<ModifyIngredients {...props} />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});
