import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Row, Col, ControlLabel, FormControl, Button
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const renderNextButton = (props) => {
  return props.nextButton ?
    (
      <div>
        <Link to="/add-ingredients">
          <Button
            bsSize="large"
            bsStyle="primary"
            block
            style={props.nextButtonStyle}
          >
            Next
          </Button>
        </Link>
        <Link to="/">
          <Button bsSize="large" block>Back</Button>
        </Link>
      </div>
    )
    : null;
}

const ModifyTitle = (props) => {
  return (
    <Grid>
      <Row>
        <Col sm={12} lg={8} lgOffset={2}>
          <h4>Recipe Information</h4>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            value={props.title}
            placeholder="Enter an awesome title"
            onChange={props.handleTitleChange}
          />
          <ControlLabel>Servings</ControlLabel>
          <FormControl
            type="text"
            value={props.servings}
            placeholder="How many people will this recipe feed?"
            onChange={props.handleServingsChange}
          />
          <ControlLabel>Allergens</ControlLabel>
          <FormControl
            type="text"
            value={props.allergens}
            placeholder="What allergens does this food contain?"
            onChange={props.handleAllergensChange}
          />
          { renderNextButton(props) }
        </Col>
      </Row>
    </Grid>
  );
}

ModifyTitle.propTypes = {
  title: PropTypes.string.isRequired,
  servings: PropTypes.string.isRequired,
  allergens: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleServingsChange: PropTypes.func.isRequired,
  handleAllergensChange: PropTypes.func.isRequired,
  nextButton: PropTypes.bool.isRequired,
  nextButtonStyle: PropTypes.object,
}

export default ModifyTitle;
