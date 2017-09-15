import React from 'react';
import { Row, Table } from 'react-bootstrap';
import { PieChart } from 'react-easy-chart';
import PropTypes from 'prop-types';
import { roundToTwo } from '../utils/api';

const COLORS = {
  Protein: '#0088FE',
  Fat: '#00C49F',
  Carbohydrate: '#FF8042'
};

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

const findMacroName = (macronutrients, target) => {
  return macronutrients[target].name;
};

const formatMacroData = (ingredients, macroKeys) => {
  return macroKeys.map(macro => {
    const macroName = findMacroName(ingredients[0].macronutrients, macro);
    return {
      key: macroName,
      value: totalMacronutrientValue(ingredients, macro),
      color: COLORS[macroName]
    };
  }).filter(macroObj => {
    return macroObj.key !== 'Calories';
  });
};

const RecipeDetails = props => {
  const targetId = props.match.params.id;
  const foundRecipe = props.recipes.find(recipe => recipe.id === targetId);
  const macroKeys = Object.keys(foundRecipe.ingredients[0].macronutrients);
  const microKeys = Object.keys(foundRecipe.ingredients[0].micronutrients);
  const macroData = formatMacroData(foundRecipe.ingredients, macroKeys);
  console.log(macroData);

  return (
    <div>
      <Row>
        <h1>{foundRecipe.titleDetails.title}</h1>
        <span>
          <strong>Allergies:</strong> {foundRecipe.titleDetails.allergens}
          <strong> | </strong>
        </span>
        <span> Makes enough for {foundRecipe.titleDetails.servings}</span>
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
        <Row className="text-center">
        <PieChart
          labels
          size={200}
          innerHoleSize={100}
          data={macroData}
        />

        </Row>
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
