import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchIngredient from '../SearchIngredient';

describe('SearchIngredient', () => {
  test('renders without crashing', () => {
    const component = shallow(<SearchIngredient />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});
