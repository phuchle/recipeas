import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Recipe = ({ title, ingredients, showEditRecipe, removeRecipe, fillEditRecipeModal }) => {
  return (
    <div className='recipe-container'>
      <h4>{title}</h4>
      <ul>{ingredients}</ul>
      <Button className="edit-recipe" onClick={() => {
        fillEditRecipeModal(title);
      }}>Edit</Button>
      <Button className="delete-recipe" bsStyle="danger" onClick={() => removeRecipe(title)}>Delete</Button>
    </div>
  );
}

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  showEditRecipe: PropTypes.func.isRequired,
  removeRecipe: PropTypes.func.isRequired,
  fillEditRecipeModal: PropTypes.func.isRequired
}

export default Recipe;
