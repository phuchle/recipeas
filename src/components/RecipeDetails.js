import React, { Component } from 'react';
import { Row, Table } from 'react-bootstrap';
import { PieChart } from 'react-easy-chart';
import PropTypes from 'prop-types';
import { roundToTwo } from '../utils/api';

const COLORS = {
  Protein: '#0088FE',
  Fat: '#00C49F',
  Carbohydrate: '#FF8042'
};

class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    const targetId = this.props.match.params.id;
    const foundRecipe = this.props.recipes.find(recipe => recipe.id === targetId);
    const macroKeys = Object.keys(foundRecipe.ingredients[0].macronutrients);
    const microKeys = Object.keys(foundRecipe.ingredients[0].micronutrients);
    const macroData = this.formatMacroData(foundRecipe.ingredients, macroKeys);

    this.state = {
      targetId,
      foundRecipe,
      macroKeys,
      microKeys,
      macroData
    };

    this.totalMacronutrientValue = this.totalMacronutrientValue.bind(this);
    this.totalMicronutrientValue = this.totalMicronutrientValue.bind(this);
    this.findMacroName = this.findMacroName.bind(this);
    this.formatMacroData = this.formatMacroData.bind(this);
  }
  totalMacronutrientValue(ingredients, macro) {
    const totalValue = ingredients.reduce((sum, current) => {
      return sum += current.macronutrients[macro].value;
    }, 0);

    return roundToTwo(totalValue);
  };

  totalMicronutrientValue(ingredients, micro) {
    const totalValue = ingredients.reduce((sum, current) => {
      return sum += current.micronutrients[micro].value;
    }, 0);

    return roundToTwo(totalValue);
  };

  findMacroName(macronutrients, target) {
    return macronutrients[target].name;
  };

  formatMacroData(ingredients, macroKeys) {
    return macroKeys.map(macro => {
      const macroName = this.findMacroName(ingredients[0].macronutrients, macro);
      return {
        key: macroName,
        value: this.totalMacronutrientValue(ingredients, macro),
        color: COLORS[macroName]
      };
    }).filter(macroObj => {
      return macroObj.key !== 'Calories';
    });
  };
  render() {
    return (
      <div>
        <Row>
          <h1>{this.state.foundRecipe.titleDetails.title}</h1>
          <span>
            <strong>Allergies:</strong> {this.state.foundRecipe.titleDetails.allergens}
            <strong> | </strong>
          </span>
          <span> Makes enough for {this.state.foundRecipe.titleDetails.servings}</span>
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
              {this.state.foundRecipe.ingredients.map(ingredient => {
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
              {this.state.macroKeys.map(macro => {
                const target = this.state.foundRecipe.ingredients[0].macronutrients[macro];
                return (
                  <th style={{ color: COLORS[target.name]}} key={macro}>{`${target.name} (${target.unit})`}</th>
                );
              })}
              </tr>
            </thead>
            <tbody>
              <tr>
                {this.state.macroKeys.map(macro => {
                  return (
                    <td key={`${macro}Total`}>{this.totalMacronutrientValue(this.state.foundRecipe.ingredients, macro)}</td>
                  );
                })}
              </tr>
            </tbody>
          </Table>
          <Row className="text-center">
          <PieChart
            size={200}
            innerHoleSize={100}
            data={this.state.macroData}
          />
  
          </Row>
        </Row>
        <Row>
          <h4>Micronutrients</h4>
          <Table responsive>
            <thead>
              <tr>
                {this.state.microKeys.map(micro => {
                  const target = this.state.foundRecipe.ingredients[0].micronutrients[micro];
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
                {this.state.microKeys.map(micro => {
                  return (
                    <td key={`${micro}Total`}>{this.totalMicronutrientValue(this.state.foundRecipe.ingredients, micro)}</td>
                  );
                })}
              </tr>
            </tbody>
          </Table>
        </Row>
      </div>
    );
  }
};

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired
  }),
  recipes: PropTypes.array.isRequired,
};

export default RecipeDetails;
