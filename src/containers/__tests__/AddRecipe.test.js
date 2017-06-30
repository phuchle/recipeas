import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { AddRecipe } from '../AddRecipe';
import configureStore from 'redux-mock-store';
import { defaultRecipes } from '../../reducers/Recipes';

const props = {
  display: true,
  closeModal: jest.fn(),
  dispatch: jest.fn()
};

const setup = (type) => {
  // setup only initializes the React component, not the redux container connected to store
  let wrapper;

  switch(type) {
    case 'shallow':
      wrapper = shallow(<AddRecipe {...props} />);
      break;
    case 'mount':
      wrapper = mount(<AddRecipe {...props} />);
      break;
    default:
      wrapper = undefined;
  }

  return {
    props,
    wrapper
  };
}

// calling onClick functions are not tested since it is in the scope of React's tests and the browser's test

describe('Add Recipe Menu', () => {
  test('Renders without crashing', () => {
    const component = renderer.create(<AddRecipe { ...props } />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Renders the connected AddRecipe component', () => {
    const store = configureStore()({
      recipes: defaultRecipes
    });

    const wrapper = mount(<AddRecipe { ...props } store={store} />);

    expect(wrapper.find(AddRecipe)).toHaveLength(1);
  });

  test('Displays invisibly when display props is false', () =>{
        const wrapper = shallow(<AddRecipe  { ...props } display={ false }/>);

        expect(wrapper.find('#myModal').node.props.style).toEqual({"display": "none"});
  });

  // testing that state updates properly //
  test('Updates title property in state correctly', () => {
    const { wrapper } = setup('shallow');
    const titleInputValue = {
      target: {
        value: 'BLT'
      }
    };

    const titleInput = wrapper.find('.form-control').at(0);

    titleInput.simulate('change', titleInputValue);

    expect(wrapper.state().title).toBe(titleInputValue.target.value);
  });

  test('Updates ingredients property in state correctly', () => {
    const { wrapper } = setup('shallow');
    const ingredientsInputValue = {
      target: {
        value: 'Bacon, Lettuce, Tomato'
      }
    }
    const ingredientsInput = wrapper.find('.form-control').at(1);

    ingredientsInput.simulate('change', ingredientsInputValue);

    expect(wrapper.state().ingredients).toBe(ingredientsInputValue.target.value);
  });

  // testing controlled components value
  test('Updates title value in input correctly', () => {
    const { wrapper } = setup('mount');
    const titleInputValue = {
      target: {
        value: 'BLT'
      }
    };
    const titleInput = wrapper.find('.form-control').at(0);
    titleInput.simulate('change', titleInputValue);

    expect(titleInput.props().value).toBe(titleInputValue.target.value);
  });

  test('Updates ingredients value in input correctly', () => {
    const { wrapper } = setup('mount');
    const ingredientsInputValue = {
      target: {
        value: 'Bacon, Lettuce, Tomato'
      }
    };
    const ingredientsInput = wrapper.find('.form-control').at(1);
    ingredientsInput.simulate('change', ingredientsInputValue);

    expect(ingredientsInput.props().value).toBe(ingredientsInputValue.target.value);
  });

});
