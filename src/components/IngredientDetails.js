import React, { Component } from 'react';
import {
  ListGroup, Button, FormControl, ControlLabel
} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { roundToTwo } from '../utils/api';
import NutrientsList from './NutrientsList';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

//gets dbNumber from props.location.state.dbNumber

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
          <NutrientsList
            nutrients={this.state.updatedDetails.macronutrients}
          />
          <h4>Micronutrients</h4>
          <NutrientsList
            nutrients={this.state.updatedDetails.micronutrients}
          />
        </ListGroup>

        <Link to="/modify-ingredients">
          <Button
            bsSize="large"
            bsStyle="primary"
            block
            style={{ marginBottom: '10px' }}
            onClick={() => {
              if (this.props.location.state.edit) {
                const id = this.props.location.state.ingredient.id;
                this.props.editTempIngredient(id, this.state.updatedDetails);
              } else {
                this.props.addTempIngredient({
                  ...this.state.updatedDetails,
                  servings: this.state.servings,
                  id: v4()
                });
              }
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
      this.props.searchNutrientInfo(this.props.location.state.dbNumber)
      .then(
        details => {
          this.setState({
          originalDetails: details,
          updatedDetails: details
        });
      });
    } else if (this.props.location.state.ingredient) {
      const locationState = this.props.location.state;

      this.setState({
        originalDetails: locationState.ingredient,
        updatedDetails: locationState.ingredient,
        servings: locationState.ingredient.servings
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
  searchNutrientInfo: PropTypes.func.isRequired
};

export default IngredientDetails;
