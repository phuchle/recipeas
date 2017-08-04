import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Row, Col, Button
} from 'react-bootstrap';
import ModifyTitle from './ModifyTitle';
import ModifyIngredients from './ModifyIngredients';
import PropTypes from 'prop-types';

const ReviewRecipe = (props) => {
  return (
    <Grid>
      <Row>
        <Col sm={12} lg={8} lgOffset={2}>
          <h4>Review Recipe</h4>
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
            ingredientList={props.ingredientList}
            nextButton={false}
            plusButton={false}
          />
          <Link to="/">
            <Button
              bsStyle="primary"
              bsSize="large"
              style={props.buttonStyle}
              block
            >
              Submit
            </Button>
          </Link>
          <Link to="/add-ingredients">
            <Button bsSize="large" block>Back</Button>
          </Link>
        </Col>
      </Row>
    </Grid>
  );
};

ReviewRecipe.propTypes = {
  buttonStyle: PropTypes.object.isRequired,
  ingredientList: PropTypes.array.isRequired
};

export default ReviewRecipe;
