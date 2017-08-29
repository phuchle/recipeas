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
        macronutrients: [
          {
            name: 'Calories',
            value: 190,
            unit: 'kcal'
          },
          {
            name: 'Protein',
            value: 7,
            unit: 'g'
          },
          {
            name: 'Fat',
            value: 16,
            unit: 'g'
          },
          {
            name: 'Carbohydrate',
            value: 6,
            unit: 'g'
          }
        ],
        micronutrients: [
          {
            name: 'Omega-3 Fatty Acids',
            value: 0,
            unit: 'g'
          },
          {
            name: 'Calcium, Ca',
            value: 0,
            unit: 'mg'
          },
          {
            name: 'Iron, Fe',
            value: 0.36,
            unit: 'mg'
          },
          {
            name: 'Vitamin D (D2 + D3)',
            value: 0,
            unit: 'µg'
          },
          {
            name: 'Vitamin B-12',
            value: 0,
            unit: 'µg'
          },
          {
            name: 'Zinc, Zn',
            value: 0,
            unit: 'mg'
          }
        ],
        servings: 1,
        id: 'cd21d967-c79f-465b-aa25-c7c52893ee80'
      },
      {
        name: 'Egg',
        measure: '1.0 large',
        macronutrients: [
          {
            name: 'Calories',
            value: 72,
            unit: 'kcal'
          },
          {
            name: 'Protein',
            value: 6,
            unit: 'g'
          },
          {
            name: 'Fat',
            value: 4,
            unit: 'g'
          },
          {
            name: 'Carbohydrate',
            value: 0,
            unit: 'g'
          }
        ],
        micronutrients: [
          {
            name: 'Omega-3 Fatty Acids',
            value: 0.05,
            unit: 'g'
          },
          {
            name: 'Calcium, Ca',
            value: 28,
            unit: 'mg'
          },
          {
            name: 'Iron, Fe',
            value: 0.88,
            unit: 'mg'
          },
          {
            name: 'Vitamin D (D2 + D3)',
            value: 1,
            unit: 'µg'
          },
          {
            name: 'Vitamin B-12',
            value: 0.45,
            unit: 'µg'
          },
          {
            name: 'Zinc, Zn',
            value: 0.65,
            unit: 'mg'
          }
        ],
        servings: 1,
        id: '2d734363-a8f6-447d-801f-26e6c408fe01'
      },
      {
        name: 'Heavy Whipping Cream',
        measure: '1.0 Tbsp',
        macronutrients: [
          {
            name: 'Calories',
            value: 50,
            unit: 'kcal'
          },
          {
            name: 'Protein',
            value: 0,
            unit: 'g'
          },
          {
            name: 'Fat',
            value: 5,
            unit: 'g'
          },
          {
            name: 'Carbohydrate',
            value: 1,
            unit: 'g'
          }
        ],
        micronutrients: [
          {
            name: 'Omega-3 Fatty Acids',
            value: 0,
            unit: 'g'
          },
          {
            name: 'Calcium, Ca',
            value: 20,
            unit: 'mg'
          },
          {
            name: 'Iron, Fe',
            value: 0,
            unit: 'mg'
          },
          {
            name: 'Vitamin D (D2 + D3)',
            value: 0,
            unit: 'µg'
          },
          {
            name: 'Vitamin B-12',
            value: 0,
            unit: 'µg'
          },
          {
            name: 'Zinc, Zn',
            value: 0,
            unit: 'mg'
          }
        ],
        servings: 1,
        id: '62996d34-098a-4826-a795-7e55b780e260'
      },
      {
        name: 'Baking Powder',
        measure: '1.0 tsp',
        macronutrients: [
          {
            name: 'Calories',
            value: 2,
            unit: 'kcal'
          },
          {
            name: 'Protein',
            value: 0,
            unit: 'g'
          },
          {
            name: 'Fat',
            value: 0,
            unit: 'g'
          },
          {
            name: 'Carbohydrate',
            value: 1,
            unit: 'g'
          }
        ],
        micronutrients: [
          {
            name: 'Omega-3 Fatty Acids',
            value: 0,
            unit: 'g'
          },
          {
            name: 'Calcium, Ca',
            value: 270,
            unit: 'mg'
          },
          {
            name: 'Iron, Fe',
            value: 0.51,
            unit: 'mg'
          },
          {
            name: 'Vitamin D (D2 + D3)',
            value: 0,
            unit: 'µg'
          },
          {
            name: 'Vitamin B-12',
            value: 0,
            unit: 'µg'
          },
          {
            name: 'Zinc, Zn',
            value: 0,
            unit: 'mg'
          }
        ],
        servings: 1,
        id: 'ad253ef3-dcb8-420a-93ec-ba13a788046c'
      },
      {
        name: 'Sugar',
        measure: '1.0 tsp',
        macronutrients: [
          {
            name: 'Calories',
            value: 60,
            unit: 'kcal'
          },
          {
            name: 'Protein',
            value: 0,
            unit: 'g'
          },
          {
            name: 'Fat',
            value: 0,
            unit: 'g'
          },
          {
            name: 'Carbohydrate',
            value: 16,
            unit: 'g'
          }
        ],
        micronutrients: [
          {
            name: 'Omega-3 Fatty Acids',
            value: 0,
            unit: 'g'
          },
          {
            name: 'Calcium, Ca',
            value: 0,
            unit: 'mg'
          },
          {
            name: 'Iron, Fe',
            value: 0,
            unit: 'mg'
          },
          {
            name: 'Vitamin D (D2 + D3)',
            value: 0,
            unit: 'µg'
          },
          {
            name: 'Vitamin B-12',
            value: 0,
            unit: 'µg'
          },
          {
            name: 'Zinc, Zn',
            value: 0,
            unit: 'mg'
          }
        ],
        servings: '4',
        id: '16075d8f-ecea-49c8-a02f-b8499f085362'
      }
    ],
    id: '93a0988d-66ef-456c-b72a-67cb0f89c98f',
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
