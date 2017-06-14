import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ title, ingredients }) {
  render() {
    return (
      <div className='recipe-container'>
          <h1>{title}</h1>
          <p>{ingredients}</p>
      </div>
    )
  }
}

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired
}

export default Recipe;
