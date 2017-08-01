import React, { Component } from 'react';
import {
  Grid, Row, Col, ListGroup, ListGroupItem, Button, FormControl, ControlLabel
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { searchNutrientInfo, roundToTwo } from '../utils/api';

//gets dbNumber from props.location.state.dbNumber in the form of:
// {
//   dbNumber: '1234567'
// }

class IngredientDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      originalDetails: null,
      updatedDetails: null,
      servings: 1
    };

    this.renderNutrientDetails = this.renderNutrientDetails.bind(this);
    this.handleServingsChange = this.handleServingsChange.bind(this);
  }

  makeMicronutrientsList() {
    const micros = this.state.updatedDetails.micronutrients;

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
    const macros = this.state.updatedDetails.macronutrients;
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
        <h4>{this.state.updatedDetails.name}</h4>
        <ControlLabel>Servings</ControlLabel>
        <FormControl
          type="number"
          placeholder="1"
          value={this.state.servings}
          onChange={this.handleServingsChange}
        />
        <p><strong>Serving Size:</strong> {this.state.updatedDetails.measure}</p>

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
    const newServing = event.target.value;
    if (!isNaN(parseInt(newServing, 10))) {
      const newMacronutrients = this.state.originalDetails.macronutrients.map(macro => {
        return {
          ...macro,
          value: roundToTwo(parseFloat(macro.value) * parseInt(newServing, 10))
        };
      });
      const newMicronutrients = this.state.originalDetails.micronutrients.map(micro => {
        return {
          ...micro,
          value: roundToTwo(parseFloat(micro.value) * parseInt(newServing, 10))
        };
      });

      this.setState({
        servings: newServing,
        updatedDetails: {
          ...this.state.updatedDetails,
          macronutrients: newMacronutrients,
          micronutrients: newMicronutrients
        }
      });
    } else {
      this.setState({
        servings: newServing,
        updatedDetails: this.state.originalDetails
      });
    }
  }
  componentDidMount() {
    searchNutrientInfo(this.props.location.state.dbNumber)
    .then(
      details => this.setState({
        originalDetails: details,
        updatedDetails: details
      })
    );
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} lg={8} lgOffset={2}>
            {this.state.updatedDetails ? this.renderNutrientDetails() : 'Loading...'}
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default IngredientDetails;
