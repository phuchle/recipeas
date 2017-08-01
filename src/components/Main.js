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
      ingredients: {},
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAllergensChange = this.handleAllergensChange.bind(this);
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
            nextButtonStyle={{ marginBottom: '10px', marginTop: '10px' }}
          />)}
        />
        <Route path="/add-ingredients" render={() => (
          <ModifyIngredients
            handleClick={this.handleIngredientsNextButton}
            nextButton={true}
            plusButton={true}
            nextButtonStyle={{ marginBottom: '10px' }}
          />
        )} />
        <Route path="/review" render={() => (
          <ReviewRecipe buttonStyle={{
            marginTop: '20px',
            marginBottom: '10px'
          }} />
        )} />
        <Route path="/search-ingredient" component={SearchIngredient} />
        <Route path="/ingredient-details" component={IngredientDetails} />
      </Switch>
    )
  }
};

export default Main;
