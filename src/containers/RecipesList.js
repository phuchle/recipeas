import React, { Component } from 'react';
import { addRecipe, editRecipe, removeRecipe } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Recipe from '../components/Recipe';
import PlusButton from '../components/PlusButton';
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import PropTypes from 'prop-types';

export class RecipesList extends Component {
  constructor(props) {
    super(props);

    // Makes a list of Recipe components
    this.renderList = this.renderList.bind(this);
  }
  renderList() {
    const { removeRecipe } = this.props;

    return this.props.recipes.map(recipe => {
      const ingredientsList = recipe.ingredients.map(ingredient => {
        return (
          <ListGroupItem key={ingredient.id}>
            { ingredient.name }
          </ListGroupItem>
        );
      });

      return (
        <ListGroupItem key={recipe.title}>
          <Recipe
            title={recipe.titleDetails.title}
            ingredients={ingredientsList}
            removeRecipe={removeRecipe}
            id={recipe.id}
          />
        </ListGroupItem>
      );
    });
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} md={6} lg={6} lgOffset={3}>
            <span>
              <h1>
                Recipes
                <Link to="/add-recipe">
                <PlusButton className="pull-right"/>
              </Link>
            </h1>
          </span>

          <ListGroup>
            { this.props.recipes ? this.renderList() : 'Add a recipe!' }
          </ListGroup>
          </Col>
        </Row>
      </Grid>
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
  return bindActionCreators({ removeRecipe }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
