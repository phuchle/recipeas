import React from 'react';
import PlusButton from '../PlusButton';
import renderer from 'react-test-renderer';

describe('PlusButton', () => {
  test('It renders without crashing', () => {
    const component = renderer.create(<PlusButton />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});