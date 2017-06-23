import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../Nav';

describe ('Navigation bar', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Navigation />);

    expect(wrapper.find('.navbar')).toHaveLength(1);
  });
});
