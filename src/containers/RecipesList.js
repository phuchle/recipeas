import React, { Component } from 'react';
import AddRecipe from './AddRecipe';
import { removeRecipe } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Recipe from '../components/Recipe';

class RecipesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddRecipe: false
    }

    this.showAddRecipe = this.showAddRecipe.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderList = this.renderList.bind(this);
  }
  showAddRecipe(event) {
    event.preventDefault();

    this.setState({
      showAddRecipe: true
    });
  }
  closeModal(event) {
    event.preventDefault();
    const target = event.target

    if (
      target.id === 'myModal' ||
      target.classList.contains('close-modal') ||
      target.classList.contains('submit-recipe')) {
        this.setState({
          showAddRecipe: false
        });
    }
  }
  renderList() {
    const { removeRecipe } = this.props;
    // console.log(this.props.removeRecipe);

    return this.props.recipes.map(recipe => {
      const ingredientsList = recipe.ingredients.split(',').map(ingredient => {
        return (
          <li className="list-group-item" key={recipe.title + ingredient}>
            { ingredient }
          </li>
        )
      });

      return (
        <li className="list-group-item" key={recipe.title}>
          <Recipe
            title={recipe.title}
            ingredients={ingredientsList}
            removeRecipe={removeRecipe}
          />
        </li>
      )
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Recipes</h1>
        <ul>
          { this.renderList() }
        </ul>
        <button className="btn btn-primary" onClick={this.showAddRecipe}>Add Recipe</button>
        <AddRecipe display={this.state.showAddRecipe} closeModal={this.closeModal}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeRecipe }, dispatch);

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
