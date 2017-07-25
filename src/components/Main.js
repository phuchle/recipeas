import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipesList from '../containers/RecipesList';
import ModifyTitle from './ModifyTitle';
import ModifyIngredients from './ModifyIngredients';
import ReviewRecipe from './ReviewRecipe';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      servings: '',
      allergens: '',
      ingredients: {},
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleServingsChange = this.handleServingsChange.bind(this);
    this.handleAllergensChange = this.handleAllergensChange.bind(this);
  }
  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
    console.log(this.state);
  }
  handleServingsChange(event) {
    this.setState({
      servings: event.target.value
    });
    console.log(this.state);
  }
  handleAllergensChange(event) {
    this.setState({
      allergens: event.target.value
    });
    console.log(this.state);
  }
  handleIngredientsNextButton(ingredients) {

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
            buttonStyle={{
              marginTop: '5px'
            }}
          />)}
        />
        <Route path="/add-ingredients" render={() => (
          <ModifyIngredients
            handleClick={this.handleIngredientsNextButton}
            nextButton={true}
            buttonStyle={{
              marginTop: '5px'
            }}
          />
        )} />
        <Route path="/review" render={() => (
          <ReviewRecipe buttonStyle={{
            marginTop: '5px'
          }} />
        )}
        />
      </Switch>
    )
  }
};

export default Main;
