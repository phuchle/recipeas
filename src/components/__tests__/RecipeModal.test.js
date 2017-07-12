import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import RecipeModal from '../RecipeModal';

describe('RecipeModal', () => {
  test('Renders without errors', () => {
    const props = {
      show: true,
      onHide: jest.fn(),
      recipeTitle: 'Test title',
      recipeIngredients: 'Cheese, Lettuce, Tomato',
      modalTitle: 'Test Modal',
      handleTitleChange: jest.fn(),
      handleIngredientsChange: jest.fn(),
      handleSubmit: jest.fn()
    };
    const wrapper = mount(<RecipeModal { ...props } />);
    expect(wrapper).toHaveLength(1);
  });
});
