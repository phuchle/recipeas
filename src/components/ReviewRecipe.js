import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Row, Col, Button
} from 'react-bootstrap';
import ModifyTitle from '../containers/ModifyTitle';
import ModifyIngredients from '../containers/ModifyIngredients';
import PropTypes from 'prop-types';

const ReviewRecipe = (props) => {
  return (
    <Grid>
      <Row>
        <Col sm={12} lg={8} lgOffset={2}>
          <h4>Review Recipe</h4>
          <ModifyTitle
            nextButton={false}
          />
          <ModifyIngredients
            nextButton={false}
            plusButton={false}
          />
          <Link to="/">
            <Button
              bsStyle="primary"
              bsSize="large"
              style={props.buttonStyle}
              onClick={() => {
                props.addRecipe(props.tempRecipe);
                props.clearTempRecipe();
              }}
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
  addRecipe: PropTypes.func.isRequired,
  tempRecipe: PropTypes.object.isRequired,
  clearTempRecipe: PropTypes.func.isRequired
};

export default ReviewRecipe;
