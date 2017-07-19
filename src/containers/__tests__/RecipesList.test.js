import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { RecipesList } from '../RecipesList';
import { defaultRecipes } from '../../reducers/Recipes';
import RootReducer from '../../reducers/RootReducer';
import { createStore } from 'redux';
import {
  addRecipe,
  editRecipe,
  removeRecipe
} from '../../actions/index';
import { Button } from 'react-bootstrap';

describe('Recipes List', () => {
  test('Renders without crashing', () => {
    const component = renderer.create(
      <RecipesList
        recipes={defaultRecipes}
        addRecipe={addRecipe}
        editRecipe={editRecipe}
        removeRecipe={removeRecipe}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('handleTitleChange() sets activeRecipe title', () => {
    const wrapper = shallow(
      <RecipesList recipes={defaultRecipes} removeRecipe={removeRecipe} />
    );
    const titleEvent = {
      target: {
        value: 'BLT'
      }
    };
    const expectedState = {
      displayAddRecipe: false,
      displayEditRecipe: false,
      activeRecipe: {
        title: 'BLT',
        ingredients: ''
      },
      targetId: ''
    };
    wrapper.instance().handleTitleChange(titleEvent);
    expect(wrapper.state()).toEqual(expectedState);
  });

  test('handleIngredientsChange() sets activeRecipe ingredients', () => {
    const wrapper = shallow(
      <RecipesList
        recipes={defaultRecipes}
        addRecipe={addRecipe}
        editRecipe={editRecipe}
        removeRecipe={removeRecipe}
      />
    );
    const ingredientsEvent = {
      target: {
        value: 'Bacon, Lettuce, Tomato'
      }
    };
    const expectedState = {
      displayAddRecipe: false,
      displayEditRecipe: false,
      activeRecipe: {
        title: '',
        ingredients: 'Bacon, Lettuce, Tomato'
      },
      targetId: ''
    };
    wrapper.instance().handleIngredientsChange(ingredientsEvent);
    expect(wrapper.state()).toEqual(expectedState);
  });

  test('resetState() reverts state to default', () => {
    const wrapper = shallow(
      <RecipesList
        recipes={defaultRecipes}
        addRecipe={addRecipe}
        editRecipe={editRecipe}
        removeRecipe={removeRecipe}
      />
    );
    const titleEvent = {
      target: {
        value: 'BLT'
      }
    };
    const ingredientsEvent = {
      target: {
        value: 'Bacon, Lettuce, Tomato'
      }
    };
    const changedState = {
      displayAddRecipe: false,
      displayEditRecipe: false,
      activeRecipe: {
        title: 'BLT',
        ingredients: 'Bacon, Lettuce, Tomato'
      },
      targetId: ''
    };
    const finalState = {
      displayAddRecipe: false,
      displayEditRecipe: false,
      activeRecipe: {
        title: '',
        ingredients: ''
      },
      targetId: ''
    }

    wrapper.instance().handleTitleChange(titleEvent);
    wrapper.instance().handleIngredientsChange(ingredientsEvent);
    expect(wrapper.state()).toEqual(changedState);

    wrapper.instance().resetState();

    expect(wrapper.state()).toEqual(finalState);
  });

  test('Add recipe button shows AddRecipe modal', () => {
    const wrapper = shallow(
      <RecipesList
        recipes={defaultRecipes}
        addRecipe={addRecipe}
        editRecipe={editRecipe}
        removeRecipe={removeRecipe}
      />
    );
    wrapper.find(Button).simulate('click');

    // showAddRecipe controls visibility of AddRecipe modal
    expect(wrapper.state().displayAddRecipe).toEqual(true);
  });

  test('hideAddRecipe sets showAddRecipe to false', () => {
    const wrapper = shallow(
      <RecipesList
        recipes={defaultRecipes}
        addRecipe={addRecipe}
        editRecipe={editRecipe}
        removeRecipe={removeRecipe}
      />
    );
    wrapper.find(Button).simulate('click');
    wrapper.instance().hideAddRecipe();

    expect(wrapper.state().displayAddRecipe).toEqual(false);
  });

  test('Edit button shows EditRecipe modal', () => {
    const wrapper = mount(
      <RecipesList
        recipes={defaultRecipes}
        addRecipe={addRecipe}
        editRecipe={editRecipe}
        removeRecipe={removeRecipe}
      />
    );
    wrapper.find('.edit-recipe').first().simulate('click');

    expect(wrapper.state().displayEditRecipe).toEqual(true);
  });

  test('fillEditRecipeModal() changes component state and shows Edit Modal', () => {
    const wrapper = mount(
      <RecipesList
        recipes={defaultRecipes}
        addRecipe={addRecipe}
        editRecipe={editRecipe}
        removeRecipe={removeRecipe}
      />
    );
    const recipe = defaultRecipes[0];
    const expectedState = {
      displayAddRecipe: false,
      displayEditRecipe: true,
      activeRecipe: {
        title: recipe.title,
        ingredients: recipe.ingredients
      },
      targetId: recipe.id
    };

    wrapper.instance().fillEditRecipeModal(recipe.id);
    expect(wrapper.state()).toEqual(expectedState);
  });

  describe('handleSubmit', () => {
    let mockStore = createStore(RootReducer);

    const dispatchAddRecipe = (recipe) => {
      mockStore.dispatch(addRecipe(recipe));
    };
    const dispatchEditRecipe = (id, recipe) => {
      mockStore.dispatch(editRecipe(id, recipe));
    };
    const dispatchRemoveRecipe = (id) => {
      mockStore.dispatch(removeRecipe(id));
    }
    const event = {
      preventDefault: jest.fn()
    };

    const wrapper = mount(
      <RecipesList
        recipes={defaultRecipes}
        addRecipe={dispatchAddRecipe}
        editRecipe={dispatchEditRecipe}
        removeRecipe={dispatchRemoveRecipe}
        store={mockStore}
      />
    );
    afterEach(() => {
      mockStore = createStore(RootReducer);
      wrapper.instance().hideAddRecipe();
      wrapper.instance().hideEditRecipe();
    });

    test('handleSubmit() can add recipe', () => {
      const recipe = {
        title: 'BLT',
        ingredients: 'Bacon, Lettuce, Tomato'
      };

      wrapper.instance().setState({
        ...wrapper.instance().state,
        activeRecipe: {
          title: recipe.title,
          ingredients: recipe.ingredients,
        },
        displayAddRecipe: true
      });
      wrapper.instance().handleSubmit(event);
      const storeLength = mockStore.getState().recipes.length

      expect(mockStore.getState().recipes.length).toBe(4);
      expect(mockStore.getState().recipes[storeLength - 1]).toHaveProperty('title', recipe.title);
      expect(mockStore.getState().recipes[storeLength - 1]).toHaveProperty('ingredients', recipe.ingredients);
    });

    test('handleSubmit() can edit recipe', () => {
      const targetId = defaultRecipes[0].id;
      const activeRecipe = {
        title: 'Pumpkin Pie',
        ingredients: 'Pumpkin Puree, Sweetened Condensed Milk, Eggs, Pumpkin Pie Spice, Pie Crust, Marshmallows'
      };
      wrapper.instance().setState({
        ...wrapper.instance().state,
        activeRecipe: activeRecipe,
        targetId: targetId,
        displayEditRecipe: true
      });

      wrapper.instance().handleSubmit(event);

      expect(mockStore.getState().recipes[0].title).toEqual(activeRecipe.title);
      expect(mockStore.getState().recipes[0].ingredients).toEqual(activeRecipe.ingredients);
    });
  });
});
