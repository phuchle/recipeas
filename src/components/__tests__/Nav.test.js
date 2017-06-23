import React from 'react';
import Navigation from '../../components/Nav';
import renderer from 'react-test-renderer';

test ('Navigation bar', () => {
  it('renders without crashing', () => {
    const component = renderer.create(
      <Navigation />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
