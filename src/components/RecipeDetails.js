import { Row, Table } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import { roundToTwo } from '../utils/api';

const totalMacronutrientValue = (ingredients, macro) => {
  const totalValue = ingredients.reduce((sum, current) => {
    return sum += current.macronutrients[macro].value;
  }, 0);

  return roundToTwo(totalValue);
};

const totalMicronutrientValue = (ingredients, micro) => {
  const totalValue = ingredients.reduce((sum, current) => {
    return sum += current.micronutrients[micro].value;
  }, 0);

  return roundToTwo(totalValue);
};

const RecipeDetails = props => {
  const targetId = props.match.params.id;
  const foundRecipe = props.recipes.find(recipe => recipe.id === targetId);
  const macroKeys = Object.keys(foundRecipe.ingredients[0].macronutrients);
  const microKeys = Object.keys(foundRecipe.ingredients[0].micronutrients);

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
            {macroKeys.map(macro => {
              const target = foundRecipe.ingredients[0].macronutrients[macro];
              return (
                <th key={macro}>{`${target.name} (${target.unit})`}</th>
              );
            })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {macroKeys.map(macro => {
                return (
                  <td key={`${macro}Total`}>{totalMacronutrientValue(foundRecipe.ingredients, macro)}</td>
                );
              })}
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <h4>Micronutrients</h4>
        <Table responsive>
          <thead>
            <tr>
              {microKeys.map(micro => {
                const target = foundRecipe.ingredients[0].micronutrients[micro];
                return (
                  <th key={micro}>{`
                    ${target.name} (${target.unit})
                  `}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              {microKeys.map(micro => {
                return (
                  <td key={`${micro}Total`}>{totalMicronutrientValue(foundRecipe.ingredients, micro)}</td>
                );
              })}
            </tr>
          </tbody>
        </Table>
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
