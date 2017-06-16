import { ADD_RECIPE, REMOVE_RECIPE } from '../actions';

const defaultRecipes = [
  {
    title: 'Pumpkin Pie',
    ingredients: 'Pumkin Puree, Sweetened Condensed Milk, Eggs, Pumkin Pie Spice, Pie Crust'
  },
  {
    title: 'Spaghetti',
    ingredients: 'Noodles, Pasta Sauce, Meatballs'
  },
  {
    title: 'Peanut Butter Mug Cake',
    ingredients: 'Peanut Butter, Eggs, Baking Powder, Sugar'
  }
];

const Recipes = (state = defaultRecipes, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return [
        ...state,
        action.recipe
      ]
    case REMOVE_RECIPE:
      return state.filter(recipe => recipe.name !== action.recipe.name );
    default:
      return state;
  }
}

export default Recipes;
