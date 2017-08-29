import React from 'react';
import IngredientDetails from '../IngredientDetails';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme'; 
import { nutrientInfo } from '../__mocks__/apiMocks';
import { MemoryRouter } from 'react-router-dom';

describe('Edit Button', () => {
  const props = {
    addTempIngredient: jest.fn(),
    clearSearchIngredientResults: jest.fn(),
    location: {
      state: {
        dbNumber: 15083
      }
    },
    searchNutrientInfo: (foodKey) => new Promise((resolve, reject) => {
      return foodKey === 15083 ? resolve(nutrientInfo) :
      reject('Error!');
    }),
  };
  test('Snapshot test', () => {
    const wrapper = renderer.create(
      <MemoryRouter>
        <IngredientDetails {...props} />
      </MemoryRouter>
    );
    const tree = wrapper.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Calls componentDidMount', () => {
    const spy = jest.spyOn(IngredientDetails.prototype, 'componentDidMount');
    mount(
      <MemoryRouter>
        <IngredientDetails {...props} />
      </MemoryRouter>
    );

    expect(spy).toHaveBeenCalled();
  });
});
