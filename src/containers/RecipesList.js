import React, { Component } from 'react';
import { addRecipe, removeRecipe } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Recipe from '../components/Recipe';
import {
  Button,
  ListGroup,
  ListGroupItem,
  Collapse
} from 'react-bootstrap';
import RecipeModal from './RecipeModal';

export class RecipesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAddRecipe: false,
      displayEditRecipe: false,
      activeRecipe: {
        title: '',
        ingredients: ''
      }
    }
    // methods that affect modal state
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);

    this.showAddRecipe = this.showAddRecipe.bind(this);
    this.hideAddRecipe = this.hideAddRecipe.bind(this);
    this.showEditRecipe = this.showEditRecipe.bind(this);
    this.hideEditRecipe = this.hideEditRecipe.bind(this);
    this.renderList = this.renderList.bind(this);


  }
  handleTitleChange(event) {
    this.setState({
      activeRecipe: {
        ...this.state.activeRecipe,
        title: event.target.value
      }
    });
  }
  handleIngredientsChange(event) {
    this.setState({
      activeRecipe: {
        ...this.state.activeRecipe,
        ingredients: event.target.value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.activeRecipe);

    if (this.state.displayAddRecipe) {
      this.props.addRecipe(this.state.activeRecipe);
      this.hideAddRecipe();
    }
    else if (this.state.displayEditRecipe) {
      this.props.editRecipe(this.state.activeRecipe);
      this.hideEditRecipe();
    }

    this.resetState();
  }
  resetState() {
    this.setState({
      activeRecipe: {
        title: '',
        ingredients: ''
      }
    });
  }
  showAddRecipe() {
    this.setState({ displayAddRecipe: true });
  }
  hideAddRecipe() {
    this.setState({ displayAddRecipe: false });
  }
  showEditRecipe(title) {
    this.setState({ displayEditRecipe: true });
  }
  hideEditRecipe(title) {
    this.setState({ displayEditRecipe: false });
  }
  fillEditRecipeModal(title) {

  }
  renderList() {
    const { removeRecipe } = this.props;

    return this.props.recipes.map(recipe => {
      const ingredientsList = recipe.ingredients.split(',').map(ingredient => {
        return (
          <ListGroupItem key={recipe.title + ingredient}>
            { ingredient }
          </ListGroupItem>
        )
      });

      return (
        <ListGroupItem key={recipe.title}>
          <Collapse in={recipe.open}>
            <Recipe
              title={recipe.title}
              ingredients={ingredientsList}
              showEditRecipe={() => this.showEditRecipe(recipe.title)}
              removeRecipe={removeRecipe}
            />
        </Collapse>
        </ListGroupItem>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Recipes</h1>
        <ListGroup>
          { this.renderList() }
        </ListGroup>
        <Button bsStyle="primary" onClick={this.showAddRecipe}>Add Recipe</Button>
         <RecipeModal
           show={this.state.displayAddRecipe}
           onHide={this.hideAddRecipe}
           modalTitle="Add Recipe"
           recipeTitle={this.state.activeRecipe.title}
           recipeIngredients={this.state.activeRecipe.ingredients}
           handleTitleChange={this.handleTitleChange}
           handleIngredientsChange={this.handleIngredientsChange}
           handleSubmit={this.handleSubmit}
         />
         <RecipeModal
           show={this.state.displayEditRecipe}
           onHide={this.hideEditRecipe}
           modalTitle="Edit Recipe"
           handleTitleChange={this.handleTitleChange}
           handleIngredientsChange={this.handleIngredientsChange}
           handleSubmit={this.handleSubmit}
         />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addRecipe, removeRecipe }, dispatch);

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
