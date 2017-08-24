import React, { Component } from 'react';
import {
  ListGroup, ListGroupItem, Button, FormControl, ControlLabel
} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { searchNutrientInfo, roundToTwo } from '../utils/api';
import PropTypes from 'prop-types';

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
      servings: 1,
      redirect: false
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
    });
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
      <Link to="/modify-ingredients">
        <Button
          bsSize="large"
          bsStyle="primary"
          block
          style={{ marginBottom: '10px' }}
          onClick={() => {
            this.props.addTempIngredient(this.state.updatedDetails);
            this.props.clearSearchIngredientResults();
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
        {this.state.redirect && (
          <Redirect to="/add-ingredients" />
        )}
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
    if (this.props.location.state.dbNumber) {
      searchNutrientInfo(this.props.location.state.dbNumber)
      .then(
        details => this.setState({
          originalDetails: details,
          updatedDetails: details
        })
      );
    } else if (this.props.location.state.ingredient) {
      this.setState({
        originalDetails: this.props.location.state.ingredient,
        updatedDetails: this.props.location.state.ingredient
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.updatedDetails ? this.renderNutrientDetails() : 'Loading...'}
      </div>
    );
  }
};

IngredientDetails.propTypes = {
  addTempIngredient: PropTypes.func.isRequired,
  clearSearchIngredientResults: PropTypes.func.isRequired,
};

export default IngredientDetails;
