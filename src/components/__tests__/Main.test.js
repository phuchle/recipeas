import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Main from '../Main';

describe('Main', () => {
  test('Snapshot', () => {
    const wrapper = renderer.create(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
