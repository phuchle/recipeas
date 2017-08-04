import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipesList from '../containers/RecipesList';
import ModifyTitle from './ModifyTitle';
import ModifyIngredients from './ModifyIngredients';
import ReviewRecipe from './ReviewRecipe';
import SearchIngredient from './SearchIngredient';
import IngredientDetails from './IngredientDetails';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      allergens: '',
      servings: '',
      ingredients: [],
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAllergensChange = this.handleAllergensChange.bind(this);
    this.handleServingsChange = this.handleServingsChange.bind(this);
    this.handleIngredientDetailNextButton = this.handleIngredientDetailNextButton.bind(this);
  }
  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }
  handleAllergensChange(event) {
    this.setState({
      allergens: event.target.value
    });
  }
  handleServingsChange(event) {
    this.setState({
      servings: event.target.value
    });
  }
  handleIngredientDetailNextButton(newIngredient) {
    this.setState({
      ...this.state,
      ingredients: [
        ...this.state.ingredients,
        newIngredient
      ]
    });
  }
  resetState() {
    this.setState({
      title: '',
      allergens: '',
      servings: '',
      ingredients: []
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={RecipesList} />

        <Route path="/add-recipe" render={() => (
          <ModifyTitle
            title={this.state.title}
            servings={this.state.servings}
            allergens={this.state.allergens}
            handleTitleChange={this.handleTitleChange}
            handleServingsChange={this.handleServingsChange}
            handleAllergensChange={this.handleAllergensChange}
            nextButton={true}
            nextButtonStyle={{
              marginBottom: '10px',
              marginTop: '10px'
            }}
          />
        )} />

        <Route path="/add-ingredients" render={() => (
          <ModifyIngredients
            nextButton={true}
            plusButton={true}
            nextButtonStyle={{ marginBottom: '10px' }}
            ingredientList={this.state.ingredients}
          />
        )} />

        <Route path="/review" render={() => (
          <ReviewRecipe
            title={this.state.title}
            servings={this.state.servings}
            allergens={this.state.allergens}
            handleTitleChange={this.handleTitleChange}
            handleServingsChange={this.handleServingsChange}
            handleAllergensChange={this.handleAllergensChange}
            // ingredientList={this.state.ingredients}
            buttonStyle={{
            marginTop: '20px',
            marginBottom: '10px'
          }} />
        )} />
      </Switch>
    );
  }
};

export default Main;
