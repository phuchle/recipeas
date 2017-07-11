import { ADD_RECIPE, EDIT_RECIPE, REMOVE_RECIPE } from '../actions';

export const defaultRecipes = [
  {
    title: 'Pumpkin Pie',
    ingredients: 'Pumpkin Puree, Sweetened Condensed Milk, Eggs, Pumpkin Pie Spice, Pie Crust',
    open: false
  },
  {
    title: 'Spaghetti',
    ingredients: 'Noodles, Pasta Sauce, Meatballs',
    open: false
  },
  {
    title: 'Peanut Butter Mug Cake',
    ingredients: 'Peanut Butter, Eggs, Baking Powder, Sugar', open: false
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
        return recipe.title === action.targetTitle ?
          action.recipe
          : recipe;
      });
    case REMOVE_RECIPE:
      return state.filter(recipe => recipe.title !== action.recipeTitle);
    default:
      return state;
  }
}

export default Recipes;
