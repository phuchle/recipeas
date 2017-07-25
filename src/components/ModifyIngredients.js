import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Row, Col, ControlLabel, FormControl, Button
} from 'react-bootstrap';
import PropTypes from 'prop-types';

class ModifyIngredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        default: {
          name: '',
          data: {}
        }
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.renderNextButton = this.renderNextButton.bind(this);
  }
  handleChange(event) {
    this.setState({
      ...this.state.ingredients,
      ingredients: {
        default: {
          ...this.state.ingredients.default,
          name: event.target.value
        }
      }
    });
  }
  renderNextButton() {
    return this.props.nextButton ?
      (
        <Link to="/review">
        <Button
          bsStyle="primary"
          onClick={this.props.handleClick}
          style={this.props.buttonStyle}
        >
          Next
        </Button>
      </Link>
      )
      : null;
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} lg={8}>
            <ControlLabel>Ingredients</ControlLabel>
            <FormControl
              type="text"
              value={this.state.ingredients.default.name}
              placeholder="Your first ingredient goes here!"
              onChange={this.handleChange}
            />
            { this.renderNextButton() }
          </Col>
        </Row>
      </Grid>
  );
  }
}

ModifyIngredients.propTypes = {
  handleClick: PropTypes.func.isRequired,
  nextButton: PropTypes.bool.isRequired,
  buttonStyle: PropTypes.object.isRequired,
}

export default ModifyIngredients;
