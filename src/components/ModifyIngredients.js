import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlusButton from './PlusButton';
import {
  Grid, Row, Col, Button, Pager
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
    this.renderPlusButton = this.renderPlusButton.bind(this);
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
        <Pager>
          <Link to="/review">
            <Button
              bsSize="large"
              bsStyle="primary"
              onClick={() =>  this.props.handleClick(this.state.ingredients) }
              style={this.props.nextButtonStyle}
              block
            >
              Next
            </Button>
          </Link>
          <Link to="/add-recipe">
            <Button bsSize="large" block>Back</Button>
          </Link>
        </Pager>
      )
      : null;
  }
  renderPlusButton() {
    return this.props.plusButton ? (
      <Link to="/search-ingredient">
        <PlusButton />
      </Link>
    ) : null;
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} lg={8} lgOffset={2}>
            <h4>
              Ingredients
              { this.renderPlusButton() }
            </h4>
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
  nextButtonStyle: PropTypes.object.isRequired,
  plusButton: PropTypes.bool.isRequired,
}

export default ModifyIngredients;
