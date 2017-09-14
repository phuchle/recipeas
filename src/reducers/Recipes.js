import {
  ADD_RECIPE, EDIT_RECIPE, REMOVE_RECIPE
} from '../actions/actionTypes';

export const defaultRecipes = [
  {
    titleDetails: {
      title: 'Pumpkin Pie',
      allergens: 'Pumpkin, Eggs, Milk',
      servings: '4'
    },
    ingredients: [
      {
        name: 'Pumpkin Puree',
        measure: '0.5 cup',
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 0,
            unit: 'kcal'
          },
          protein: {
            id: '203',
            name: 'Protein',
            value: 2,
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
            value: 20,
            unit: 'g'
          }
        },
        micronutrients: {
          '0': {
            id: '301',
            name: 'Calcium, Ca',
            value: 82,
            unit: 'mg'
          },
          '1': {
            id: '303',
            name: 'Iron, Fe',
            value: 3.82,
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
        servings: '2',
        id: '9785e869-d859-446e-86de-d663729d7b2d'
      },
      {
        name: 'Sweetened Condensed Milk',
        measure: '2.0 Tbsp',
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 780,
            unit: 'kcal'
          },
          protein: {
            id: '203',
            name: 'Protein',
            value: 18,
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
            value: 132,
            unit: 'g'
          }
        },
        micronutrients: {
          '0': {
            id: '301',
            name: 'Calcium, Ca',
            value: 600,
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
        servings: '6',
        id: '2f767646-ae9d-442f-a838-7a1b4ccb2855'
      },
      {
        name: 'Eggs',
        measure: '3.0 large',
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 216,
            unit: 'kcal'
          },
          protein: {
            id: '203',
            name: 'Protein',
            value: 18,
            unit: 'g'
          },
          fat: {
            id: '204',
            name: 'Fat',
            value: 12,
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
            value: 84,
            unit: 'mg'
          },
          '1': {
            id: '303',
            name: 'Iron, Fe',
            value: 2.64,
            unit: 'mg'
          },
          '2': {
            id: '328',
            name: 'Vitamin D (D2 + D3)',
            value: 3,
            unit: 'µg'
          },
          '3': {
            id: '418',
            name: 'Vitamin B-12',
            value: 1.35,
            unit: 'µg'
          },
          '4': {
            id: '309',
            name: 'Zinc, Zn',
            value: 1.95,
            unit: 'mg'
          },
          omega3: {
            id: '003',
            name: 'Omega-3 Fatty Acids',
            value: 0.15,
            unit: 'g'
          }
        },
        servings: '3',
        id: 'c4ea7b7f-a150-4b2c-a9f2-d4382e6bdeb4'
      },
      {
        name: 'Pumpkin Pie Spice',
        measure: '1.0 tsp',
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 18,
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
            value: 3,
            unit: 'g'
          }
        },
        micronutrients: {
          '0': {
            id: '301',
            name: 'Calcium, Ca',
            value: 36,
            unit: 'mg'
          },
          '1': {
            id: '303',
            name: 'Iron, Fe',
            value: 1.02,
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
            value: 0.12,
            unit: 'mg'
          },
          omega3: {
            id: '003',
            name: 'Omega-3 Fatty Acids',
            value: 0,
            unit: 'g'
          }
        },
        servings: '3',
        id: 'ef64d00c-a197-418d-aef0-1b4b02865fc4'
      },
      {
        name: 'Flaky Pie Crust',
        measure: '1 pie whole crust',
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 2480,
            unit: 'kcal'
          },
          protein: {
            id: '203',
            name: 'Protein',
            value: 32,
            unit: 'g'
          },
          fat: {
            id: '204',
            name: 'Fat',
            value: 96,
            unit: 'g'
          },
          carbohydrate: {
            id: '205',
            name: 'Carbohydrate',
            value: 376,
            unit: 'g'
          }
        },
        micronutrients: {
          '0': {
            id: '301',
            name: 'Calcium, Ca',
            value: 800,
            unit: 'mg'
          },
          '1': {
            id: '303',
            name: 'Iron, Fe',
            value: 5.76,
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
        servings: '8',
        id: 'b9bca07c-03b2-44dc-8e51-aa8a459abb4f'
      }
    ],
    id: 'c9c5dfa3-4c1c-4c09-846e-9443a4e62d30',
    editMode: false
  },
  {
    titleDetails: {
      title: 'Spaghetti',
      allergens: 'Tomatoes',
      servings: '2'
    },
    ingredients: [
      {
        name: 'Spaghetti Pasta',
        measure: '2.0 oz',
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 800,
            unit: 'kcal'
          },
          protein: {
            id: '203',
            name: 'Protein',
            value: 28,
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
            value: 164,
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
            value: 7.2,
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
        servings: '4',
        id: '8feffcb2-8fd5-4b09-a613-03778a96ce3f'
      },
      {
        name: 'Beef Meatballs',
        measure: '12 Meatballs',
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 540,
            unit: 'kcal'
          },
          protein: {
            id: '203',
            name: 'Protein',
            value: 30,
            unit: 'g'
          },
          fat: {
            id: '204',
            name: 'Fat',
            value: 42,
            unit: 'g'
          },
          carbohydrate: {
            id: '205',
            name: 'Carbohydrate',
            value: 12,
            unit: 'g'
          }
        },
        micronutrients: {
          '0': {
            id: '301',
            name: 'Calcium, Ca',
            value: 80,
            unit: 'mg'
          },
          '1': {
            id: '303',
            name: 'Iron, Fe',
            value: 3.6,
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
        servings: '2',
        id: '68953bb7-e5da-42b0-b50e-b66020cddc15'
      },
      {
        name: 'Vodka Pasta Sauce',
        measure: '0.5 cup',
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 630,
            unit: 'kcal'
          },
          protein: {
            id: '203',
            name: 'Protein',
            value: 9,
            unit: 'g'
          },
          fat: {
            id: '204',
            name: 'Fat',
            value: 54,
            unit: 'g'
          },
          carbohydrate: {
            id: '205',
            name: 'Carbohydrate',
            value: 21,
            unit: 'g'
          }
        },
        micronutrients: {
          '0': {
            id: '301',
            name: 'Calcium, Ca',
            value: 300,
            unit: 'mg'
          },
          '1': {
            id: '303',
            name: 'Iron, Fe',
            value: 8.13,
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
        servings: '3',
        id: '95691df8-b176-4374-bb6a-4d0cbef9ba5c'
      }
    ],
    id: 'd1a683b8-38ba-42db-94c3-0ebfaa36a945',
    editMode: false
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
        macronutrients: {
          kcal: {
            id: '208',
            name: 'Calories',
            value: 60,
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
            value: 16,
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
          'omega3': {
            id: '003',
            name: 'Omega-3 Fatty Acids',
            value: 0,
            unit: 'g'
          }
        },
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
