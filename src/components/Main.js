import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipesList from '../containers/RecipesList';
import ModifyTitle from '../containers/ModifyTitle';
import ModifyIngredients from '../containers/ModifyIngredients';
import ReviewRecipe from './ReviewRecipe';
import SearchIngredient from '../containers/SearchIngredient';
import IngredientDetails from './IngredientDetails';

const Main = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={RecipesList} />

      <Route path="/add-recipe" render={() => (
        <ModifyTitle
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
        />
      )} />

      <Route path="/search-ingredient" component={SearchIngredient} />

      <Route path="/ingredient-details" render={({ location }) => (
        <IngredientDetails
          location={location}
        />
      )} />

      <Route path="/review" render={() => (
        <ReviewRecipe
          buttonStyle={{
          marginTop: '20px',
          marginBottom: '10px'
        }} />
      )} />
    </Switch>
  );
};

export default Main;
