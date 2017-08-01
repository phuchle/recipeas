import React, { Component } from 'react';
import {
  Grid, Row, Col, ListGroup, ListGroupItem, Button, FormControl, ControlLabel
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { searchNutrientInfo } from '../utils/api';

//gets dbNumber from props.location.state.dbNumber in the form of:
// {
//   dbNumber: '1234567'
// }

class IngredientDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: null,
      servings: 1
    };

    this.renderNutrientDetails = this.renderNutrientDetails.bind(this);
    this.handleServingsChange = this.handleServingsChange.bind(this);
  }

  makeMicronutrientsList() {
    const micros = this.state.details.micronutrients;

    return micros.map(micro => {
      return (
        <ListGroupItem key={micro.name}>
          <strong>{micro.name}: </strong>
          {micro.value + micro.unit}
        </ListGroupItem>
      );
    });
  }
  makeMacronutrientList() {
    const macros = this.state.details.macronutrients;
    return macros.map(macro => {
      return (
        <ListGroupItem key={macro.name}>
          <strong>{macro.name}: </strong>
          { macro.value + macro.unit}
        </ListGroupItem>
      );
    })
  }
  renderNutrientDetails() {
    return (
      <div>
        <h4>{this.state.details.name}</h4>
        <ControlLabel>Servings</ControlLabel>
        <FormControl
          type="number"
          placeholder="1"
          value={this.state.servings}
          onChange={this.handleServingsChange}
        />
        <p><strong>Serving Size:</strong> {this.state.details.measure}</p>

        <ListGroup>
          <h4>Macronutrients</h4>
          {this.makeMacronutrientList()}
          <h4>Micronutrients</h4>
          {this.makeMicronutrientsList()}
        </ListGroup>

        <Link to="/search-ingredients">
          <Button
            bsSize="large"
            bsStyle="primary"
            block
            style={{
              marginBottom: '10px'
            }}
          >
            Add Ingredient
          </Button>
        </Link>

        <Link to="/search-ingredient">
          <Button
            bsSize="large"
            block
            style={{
              marginBottom: '20px'
            }}
          >
            Back
          </Button>
        </Link>
      </div>
    );
  }
  handleServingsChange(event) {
    this.setState({
      servings: event.target.value
    });
  }
  componentDidMount() {
    searchNutrientInfo(this.props.location.state.dbNumber)
    .then(
      details => this.setState({ details: details })
    );
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} lg={8} lgOffset={2}>
            {this.state.details ? this.renderNutrientDetails() : 'Loading...'}
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default IngredientDetails;
