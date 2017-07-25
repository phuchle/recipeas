import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Row, Col, ControlLabel, Button
} from 'react-bootstrap';
import ModifyTitle from './ModifyTitle';
import ModifyIngredients from './ModifyIngredients';
import PropTypes from 'prop-types';

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
            nextButton={false}
          />
          <ModifyIngredients
            handleClick={()=>{}}
            nextButton={false}
          />
          <Link to="/">
            <Button bsStyle="primary" style={props.buttonStyle}>
              Submit
            </Button>
          </Link>
        </Col>
      </Row>
    </Grid>
  );
}

ReviewRecipe.propTypes = {
  buttonStyle: PropTypes.object.isRequired,
}

export default ReviewRecipe;
