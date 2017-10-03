import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ReviewRecipe from '../ReviewRecipe';

const props = {
  buttonStyle: {},
  addRecipe: jest.fn(),
  tempRecipe: {},
  clearTempRecipe: jest.fn()
};

describe('ReviewRecipe', () => {
  test('renders without crashing', () => {
    const component = shallow(<ReviewRecipe {...props} />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});
