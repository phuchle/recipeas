import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '../Nav';

describe ('Navigation bar', () => {
  test('renders without crashing', () => {
    const component = renderer.create(<Navigation />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
