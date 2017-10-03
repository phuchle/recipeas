import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ModifyTitle from '../ModifyTitle';

const props = {
  nextButton: true,
  plusButton: true,
  ingredientList: [],
  modifyTempTitle: jest.fn()
};

describe('ModifyTitle', () => {
  test('renders without crashing', () => {
    const component = shallow(<ModifyTitle {...props} />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});
