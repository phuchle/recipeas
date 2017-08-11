import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipesList from '../containers/RecipesList';
import ModifyTitle from '../containers/ModifyTitle';
import ModifyIngredients from '../containers/ModifyIngredients';
import SearchIngredient from '../containers/SearchIngredient';
import IngredientDetails from '../containers/IngredientDetails';
import ReviewRecipe from '../containers/ReviewRecipe';
import { Grid, Row, Col } from 'react-bootstrap';

const Main = (props) => {
  return (
    <Grid>
      <Row>
        <Col sm={12} lg={6} lgOffset={3}>
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
        </Col>
      </Row>
    </Grid>
  );
};

export default Main;
