import React from 'react';
import renderer from 'react-test-renderer';
import EditButton from '../EditButton';

describe('Edit Button', () => {
  test('Snapshot test', () => {
    const component = renderer.create(
      <EditButton />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
