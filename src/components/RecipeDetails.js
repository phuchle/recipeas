import { Row, Table } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

const calculateTotalCalories = (ingredients) => {
  console.log(ingredients);
  // return ingredients.reduce((sum, current) => {
  //   return sum += current.macronutrients.calories.value;
  // }, 0);
};

const RecipeDetails = props => {
  const targetId = props.match.params.id;
  const foundRecipe = props.recipes.find(recipe => recipe.id === targetId);

  return (
    <div>
      <Row>
        <h1>{foundRecipe.titleDetails.title}</h1>
        <h4>Allergies: {foundRecipe.titleDetails.allergens}</h4>
        <h4>Makes enough for {foundRecipe.titleDetails.servings}</h4>
      </Row>
      <Row>
        <h4>Ingredients</h4>
        <Table responsive>
          <thead>
            <tr>
              <th>Measure</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {foundRecipe.ingredients.map(ingredient => {
              return (
                <tr key={ingredient.id}>
                  <td>{ingredient.measure}</td>
                  <td>{ingredient.name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <h4>Macronutrients</h4>
        <Table responsive>
          <thead>
            <tr>
              <th>Calories (kcal)</th>
              <th>Carbohydrate (g)</th>
              <th>Protein (g)</th>
              <th>Fat (g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{calculateTotalCalories(foundRecipe.ingredients)}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <h4>Micronutrients</h4>
      </Row>
    </div>
  );
};

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired
  }),
  recipes: PropTypes.array.isRequired,
};

export default RecipeDetails;
