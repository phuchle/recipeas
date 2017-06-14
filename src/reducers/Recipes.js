import { ADD_RECIPE, REMOVE_RECIPE, addRecipe, removeRecipe } from '../actions';

const defaultRecipes = () => {
  return [
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
  ]
}

const recipes = (state = defaultRecipes, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return [
        ...state,
        action.recipe
      ]
    case REMOVE_RECIPE:
      return state.filter(recipe => { recipe.name !== action.recipe.name });
    default:
      return state;
  }
}

export default recipes;
