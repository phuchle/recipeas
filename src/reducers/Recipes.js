import {
  ADD_RECIPE, EDIT_RECIPE, REMOVE_RECIPE
} from '../actions/actionTypes';
import { v4 } from 'uuid';

export const defaultRecipes = [
  {
    titleDetails: {
      title: 'Pumpkin Pie',
      servings: '4',
      allergens: 'Eggs, Milk'
    },
    ingredients: [
      { name: 'Pumpkin Puree', id: v4(), measure: '1 can' },
      { name: 'Sweetened Condensed Milk', id: v4(), measure: '4 tbsp' },
      { name: 'Eggs', id: v4(), measure: '2 Eggs' },
      { name: 'Pumpkin Pie Spice', id: v4(), measure: '2 tbsp' },
      { name: 'Pie Crust', id: v4(), measure: '1 crust' }
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
      { name: 'Noodles', id: v4(), measure: '8oz' },
      { name: 'Pasta Sauce', id: v4(), measure: 'Half a jar' },
      { name: 'Meatballs', id: v4(), measure: 'As many as you want' }
    ],
    id: v4()
  },
  {
    titleDetails: {
      title: 'Peanut Butter Mug Cake',
      allergens: 'Nuts, Eggs',
      servings: '1'
    },
    ingredients: [
      {
        name: 'Skippy Extra Crunchy Peanut Butter',
        measure: '2.0 Tbsp',
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 190,
            unit: 'kcal'
          },
          protein: {
            id: '203',
            name: 'Protein',
            value: 7,
            unit: 'g'
          },
          fat: {
            id: '204',
            name: 'Fat',
            value: 16,
            unit: 'g'
          },
          carbohydrate: {
            id: '205',
            name: 'Carbohydrate',
            value: 6,
            unit: 'g'
          }
        },
        micronutrients: {
          '0': {
            id: '301',
            name: 'Calcium, Ca',
            value: 0,
            unit: 'mg'
          },
          '1': {
            id: '303',
            name: 'Iron, Fe',
            value: 0.36,
            unit: 'mg'
          },
          '2': {
            id: '328',
            name: 'Vitamin D (D2 + D3)',
            value: 0,
            unit: 'µg'
          },
          '3': {
            id: '418',
            name: 'Vitamin B-12',
            value: 0,
            unit: 'µg'
          },
          '4': {
            id: '309',
            name: 'Zinc, Zn',
            value: 0,
            unit: 'mg'
          },
          omega3: {
            id: '003',
            name: 'Omega-3 Fatty Acids',
            value: 0,
            unit: 'g'
          }
        },
        servings: 1,
        id: 'c55e1b4a-226c-410a-becf-5a7695dcb3f6'
      },
      {
        name: 'Egg',
        measure: '1.0 large',
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 72,
            unit: 'kcal'
          },
          protein: {
            id: '203',
            name: 'Protein',
            value: 6,
            unit: 'g'
          },
          fat: {
            id: '204',
            name: 'Fat',
            value: 4,
            unit: 'g'
          },
          carbohydrate: {
            id: '205',
            name: 'Carbohydrate',
            value: 0,
            unit: 'g'
          }
        },
        micronutrients: {
          '0': {
            id: '301',
            name: 'Calcium, Ca',
            value: 28,
            unit: 'mg'
          },
          '1': {
            id: '303',
            name: 'Iron, Fe',
            value: 0.88,
            unit: 'mg'
          },
          '2': {
            id: '328',
            name: 'Vitamin D (D2 + D3)',
            value: 1,
            unit: 'µg'
          },
          '3': {
            id: '418',
            name: 'Vitamin B-12',
            value: 0.45,
            unit: 'µg'
          },
          '4': {
            id: '309',
            name: 'Zinc, Zn',
            value: 0.65,
            unit: 'mg'
          },
          omega3: {
            id: '003',
            name: 'Omega-3 Fatty Acids',
            value: 0.05,
            unit: 'g'
          }
        },
        servings: 1,
        id: '4ff4fa3e-3058-4001-987a-25022a944a9d'
      },
      {
        name: 'Heavy Whipping Cream',
        measure: '1.0 Tbsp',
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 50,
            unit: 'kcal'
          },
          protein: {
            id: '203',
            name: 'Protein',
            value: 0,
            unit: 'g'
          },
          fat: {
            id: '204',
            name: 'Fat',
            value: 5,
            unit: 'g'
          },
          carbohydrate: {
            id: '205',
            name: 'Carbohydrate',
            value: 1,
            unit: 'g'
          }
        },
        micronutrients: {
          '0': {
            id: '301',
            name: 'Calcium, Ca',
            value: 20,
            unit: 'mg'
          },
          '1': {
            id: '303',
            name: 'Iron, Fe',
            value: 0,
            unit: 'mg'
          },
          '2': {
            id: '328',
            name: 'Vitamin D (D2 + D3)',
            value: 0,
            unit: 'µg'
          },
          '3': {
            id: '418',
            name: 'Vitamin B-12',
            value: 0,
            unit: 'µg'
          },
          '4': {
            id: '309',
            name: 'Zinc, Zn',
            value: 0,
            unit: 'mg'
          },
          omega3: {
            id: '003',
            name: 'Omega-3 Fatty Acids',
            value: 0,
            unit: 'g'
          }
        },
        servings: 1,
        id: '67239d28-2974-4c22-aece-d454384b9ca7'
      },
      {
        name: 'Baking Powder',
        measure: '1.0 tsp',
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 5,
            unit: 'kcal'
          },
          protein: {
            id: '203',
            name: 'Protein',
            value: 0,
            unit: 'g'
          },
          fat: {
            id: '204',
            name: 'Fat',
            value: 0,
            unit: 'g'
          },
          carbohydrate: {
            id: '205',
            name: 'Carbohydrate',
            value: 2,
            unit: 'g'
          }
        },
        micronutrients: {
          '0': {
            id: '301',
            name: 'Calcium, Ca',
            value: 217,
            unit: 'mg'
          },
          '1': {
            id: '303',
            name: 'Iron, Fe',
            value: 0.41,
            unit: 'mg'
          },
          '2': {
            id: '328',
            name: 'Vitamin D (D2 + D3)',
            value: 0,
            unit: 'µg'
          },
          '3': {
            id: '418',
            name: 'Vitamin B-12',
            value: 0,
            unit: 'µg'
          },
          '4': {
            id: '309',
            name: 'Zinc, Zn',
            value: 0.04,
            unit: 'mg'
          },
          omega3: {
            id: '003',
            name: 'Omega-3 Fatty Acids',
            value: 0,
            unit: 'g'
          }
        },
        servings: 1,
        id: 'e8905927-dd23-465b-a112-b21b2d0168b7'
      },
      {
        name: 'Sugar',
        measure: '4.0 g',
        macronutrients: [
          {
            id: '208',
            name: 'Calories',
            value: 60,
            unit: 'kcal'
          },
          {
            id: '203',
            name: 'Protein',
            value: 0,
            unit: 'g'
          },
          {
            id: '204',
            name: 'Fat',
            value: 0,
            unit: 'g'
          },
          {
            id: '205',
            name: 'Carbohydrate',
            value: 16,
            unit: 'g'
          }
        ],
        micronutrients: [
          {
            id: '301',
            name: 'Calcium, Ca',
            value: 0,
            unit: 'mg'
          },
          {
            id: '303',
            name: 'Iron, Fe',
            value: 0,
            unit: 'mg'
          },
          {
            id: '328',
            name: 'Vitamin D (D2 + D3)',
            value: 0,
            unit: 'µg'
          },
          {
            id: '418',
            name: 'Vitamin B-12',
            value: 0,
            unit: 'µg'
          },
          {
            id: '309',
            name: 'Zinc, Zn',
            value: 0,
            unit: 'mg'
          },
          {
            id: '003',
            name: 'Omega-3 Fatty Acids',
            value: 0,
            unit: 'g'
          }
        ],
        servings: '4',
        id: '7b365d9a-04ad-43e1-a738-5284c858847f'
      }
    ],
    id: '8ed88d04-11a1-4922-8c03-4bdf6cb6c084',
    editMode: false
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
