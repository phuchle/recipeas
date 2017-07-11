import React, { Component } from 'react';
import { addRecipe, editRecipe, removeRecipe } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Recipe from '../components/Recipe';
import RecipeModal from '../components/RecipeModal';
import {
  Button,
  ListGroup,
  ListGroupItem,
  Collapse
} from 'react-bootstrap';

export class RecipesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAddRecipe: false,
      displayEditRecipe: false,
      activeRecipe: {
        title: '',
        ingredients: ''
      },
      targetTitle: ''
    }
    // methods that affect modal state
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.fillEditRecipeModal = this.fillEditRecipeModal.bind(this);

    //methods that have to do with modal visibility
    this.showAddRecipe = this.showAddRecipe.bind(this);
    this.hideAddRecipe = this.hideAddRecipe.bind(this);
    this.showEditRecipe = this.showEditRecipe.bind(this);
    this.hideEditRecipe = this.hideEditRecipe.bind(this);

    // Makes a list of Recipe components
    this.renderList = this.renderList.bind(this);


  }
  handleTitleChange(event) {
    this.setState({
      ...this.state,
      activeRecipe: {
        ...this.state.activeRecipe,
        title: event.target.value
      }
    });
  }
  handleIngredientsChange(event) {
    this.setState({
      ...this.state,
      activeRecipe: {
        ...this.state.activeRecipe,
        ingredients: event.target.value
      }
    });
  }
  resetState() {
    this.setState({
      ...this.state,
      activeRecipe: {
        title: '',
        ingredients: ''
      }
    });
  }
  showAddRecipe() {
    this.setState({ ...this.state, displayAddRecipe: true });
  }
  hideAddRecipe() {
    this.setState({ ...this.state, displayAddRecipe: false }, () => this.resetState());
  }
  showEditRecipe() {
    this.setState({ ...this.state, displayEditRecipe: true });
  }
  hideEditRecipe() {
    this.setState({ ...this.state, displayEditRecipe: false }, () => this.resetState());
  }
  fillEditRecipeModal(title) {
    const targetRecipe = this.props.recipes.find(recipe => {
      return recipe.title === title;
    });

    this.setState({
      ...this.state,
      activeRecipe: {
        title: targetRecipe.title,
        ingredients: targetRecipe.ingredients
      },
      targetTitle: targetRecipe.title
    }, () => this.showEditRecipe());
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.displayAddRecipe) {
      this.props.addRecipe(this.state.activeRecipe);
    }
    else if (this.state.displayEditRecipe) {
      this.props.editRecipe(this.state.targetTitle, this.state.activeRecipe);
    }
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
              showEditRecipe={this.showEditRecipe}
              removeRecipe={removeRecipe}
              fillEditRecipeModal={this.fillEditRecipeModal}
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
           modalTitle="Add Recipe"
           show={this.state.displayAddRecipe}
           onHide={this.hideAddRecipe}
           recipeTitle={this.state.activeRecipe.title}
           recipeIngredients={this.state.activeRecipe.ingredients}
           handleTitleChange={this.handleTitleChange}
           handleIngredientsChange={this.handleIngredientsChange}
           handleSubmit={this.handleSubmit}
         />
         <RecipeModal
           modalTitle="Edit Recipe"
           show={this.state.displayEditRecipe}
           onHide={this.hideEditRecipe}
           recipeTitle={this.state.activeRecipe.title}
           recipeIngredients={this.state.activeRecipe.ingredients}
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
  return bindActionCreators({ addRecipe, editRecipe, removeRecipe }, dispatch);

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
