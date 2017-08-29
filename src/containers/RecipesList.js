import React, { Component } from 'react';
import {
  removeRecipe,
  loadStoredRecipe,
  activateEditMode
} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Recipe from '../components/Recipe';
import PlusButton from '../components/PlusButton';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

export class RecipesList extends Component {
  constructor(props) {
    super(props);

    // Makes a list of Recipe components
    this.renderList = this.renderList.bind(this);
  }
  renderList() {
    const {
      removeRecipe,
      loadStoredRecipe,
      activateEditMode
    } = this.props;

    return this.props.recipes.map(recipe => {
      const ingredientsList = recipe.ingredients.map(ingredient => {
        return (
          <ListGroupItem key={ingredient.id}>
            { ingredient.name }
          </ListGroupItem>
        );
      });

      return (
        <ListGroupItem key={recipe.id}>
          <Recipe
            title={recipe.titleDetails.title}
            ingredientsList={ingredientsList}
            removeRecipe={removeRecipe}
            id={recipe.id}
            loadStoredRecipe={() => loadStoredRecipe(recipe)}
            activateEditMode={activateEditMode}
          />
        </ListGroupItem>
      );
    });
  }
  render() {
    return (
      <div>
        <span>
          <h1>
            Recipes
            <Link to="/modify-title">
              <PlusButton className="pull-right"/>
            </Link>
          </h1>
        </span>

        <ListGroup>
          { this.props.recipes ? this.renderList() : 'Add a recipe!' }
        </ListGroup>
      </div>
    );
  }
}

RecipesList.PropTypes = {
  recipes: PropTypes.array.isRequired,
  removeRecipe: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    removeRecipe,
    loadStoredRecipe,
    activateEditMode
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
