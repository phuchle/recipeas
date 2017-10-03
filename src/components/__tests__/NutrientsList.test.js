import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NutrientsList from '../NutrientsList';

const props = {
  nutrients: {}
};

describe('NutrientsList', () => {
  test('renders without crashing', () => {
    const component = shallow(<NutrientsList {...props} />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});
