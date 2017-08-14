import { ADD_RECIPE, EDIT_RECIPE, REMOVE_RECIPE } from '../actions';
import { v4 } from 'uuid';

export const defaultRecipes = [
  {
    titleDetails: {
      title: 'Pumpkin Pie',
      servings: '4',
      allergens: 'Eggs, Milk'
    },
    ingredients: [
      { name: 'Pumpkin Puree'},
      { name: 'Sweetened Condensed Milk' },
      { name: 'Eggs' },
      { name: 'Pumpkin Pie Spice' },
      { name: 'Pie Crust'}
    ],
    id: v4()
  },
  {
    titleDetails: {
      title: 'Spaghetti',
      servings: '4',
      allergens: 'Tomatoes'
    },
    ingredients: [
      { name: 'Noodles' },
      { name: 'Pasta Sauce' },
      { name: 'Meatballs' }
    ],
    id: v4()
  }
];

const Recipes = (state = defaultRecipes, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return [
        ...state,
        action.recipe
      ];
    case EDIT_RECIPE:
      return state.map(recipe => {
        return recipe.id === action.id ? action.recipe : recipe;
      });
    case REMOVE_RECIPE:
      return state.filter(recipe => recipe.id !== action.id);
    default:
      return state;
  }
};

export default Recipes;
