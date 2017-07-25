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
    }, console.log(this.state.ingredients.default));
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
            <Link to="/review">
              <Button bsStyle="primary" onClick={this.props.handleClick}>
                Next
              </Button>
            </Link>
          </Col>
        </Row>
      </Grid>
  );
  }
}

export default ModifyIngredients;
