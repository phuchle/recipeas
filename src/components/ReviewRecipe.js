import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Row, Col, ControlLabel, FormControl, Button
} from 'react-bootstrap';
import ModifyTitle from './ModifyTitle';
import ModifyIngredients from './ModifyIngredients';

const ReviewRecipe = (props) => {
  return (
    <Grid>
      <Row>
        <Col sm={12} lg={8}>
          <ControlLabel>Review Recipe</ControlLabel>
          <ModifyTitle
            title={props.title}
            servings={props.servings}
            allergens={props.allergens}
            handleTitleChange={props.handleTitleChange}
            handleServingsChange={props.handleServingsChange}
            handleAllergensChange={props.handleAllergensChange}
          />
          <ModifyIngredients />
          <Link to="/">
            <Button bsStyle="primary">
              Submit
            </Button>
          </Link>
        </Col>
      </Row>
    </Grid>
  );
}

export default ReviewRecipe;
