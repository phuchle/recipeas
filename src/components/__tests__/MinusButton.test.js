import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MinusButton from '../MinusButton';

describe('MinusButton', () => {
  test('renders without crashing', () => {
    const component = shallow(<MinusButton />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});
