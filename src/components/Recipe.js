import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ title, ingredients, removeRecipe }) => {
  return (
    <div className='recipe-container'>
        <h4>{title}</h4>
        <ul>{ingredients}</ul>
        <button onClick={() => removeRecipe(title)} className="btn btn-danger">Delete</button>
    </div>
  );
}

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  removeRecipe: PropTypes.func.isRequired
}

export default Recipe;
