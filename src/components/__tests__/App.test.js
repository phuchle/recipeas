import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe ('App', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.App')).toHaveLength(1);
  });
});
