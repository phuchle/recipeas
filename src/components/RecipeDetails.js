import { Row, Table } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetails = props => {
  const targetId = props.match.params.id;
  const foundRecipe = props.recipes.find(recipe => recipe.id === targetId);

  return (
    <div>
      <Row>
        <h1>{foundRecipe.titleDetails.title}</h1>
        <h4>Makes enough for {foundRecipe.titleDetails.servings}</h4>
        <h4>Allergies: {foundRecipe.titleDetails.allergens}</h4>
      </Row>
      <Row>
        <h3>Ingredients</h3>
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
