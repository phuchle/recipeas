import { ADD_RECIPE, EDIT_RECIPE, REMOVE_RECIPE } from '../actions';
import { v4 } from 'uuid';

export const defaultRecipes = [
  {
    title: 'Pumpkin Pie',
    ingredients: 'Pumpkin Puree, Sweetened Condensed Milk, Eggs, Pumpkin Pie Spice, Pie Crust',
    id: v4()
  },
  {
    title: 'Spaghetti',
    ingredients: 'Noodles, Pasta Sauce, Meatballs',
    id: v4()
  },
  {
    title: 'Peanut Butter Mug Cake',
    ingredients: 'Peanut Butter, Eggs, Baking Powder, Sugar',
    id: v4()
  }
];

const Recipes = (state = defaultRecipes, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return [
        ...state,
        action.recipe
      ]
    case EDIT_RECIPE:
      return state.map(recipe => {
        return recipe.id === action.id ?
          { id: recipe.id, ...action.recipe }
          : recipe;
      });
    case REMOVE_RECIPE:
      return state.filter(recipe => recipe.id !== action.id);
    default:
      return state;
  }
}

export default Recipes;
