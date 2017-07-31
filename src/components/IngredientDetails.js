import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
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
      details: null
    };

    this.renderNutrientDetails = this.renderNutrientDetails.bind(this);
    this.parseNutrients = this.parseNutrients.bind(this);

  }
  sumOmega3() {
    const nutrients = this.state.details.nutrients;
    const epa = nutrients.find(nutrObj => {
      return nutrObj.nutrient_id === '629';
    });
    const ala = nutrients.find(nutrObj => {
      return nutrObj.nutrient_id === '851';
    });
    const dha = nutrients.find(nutrObj => {
      return nutrObj.nutrient_id === '621';
    });

    if (epa.value === '--') epa.value = 0;
    if (ala.value === '--') ala.value = 0;
    if (dha.value === '--') dha.value = 0;

    const omega3 = parseFloat(epa.value) + parseFloat(ala.value) + parseFloat(dha.value);

    return omega3;
  }
  makeMicronutrientsList() {
    const nutrients = this.state.details.nutrients;
    const omega3 = this.sumOmega3();
    const nutrientList = nutrients.filter(nutrObj => {
      // filtering out the omega 3s, calories, macronutrients
      if (
        nutrObj.nutrient_id !== '629' // epa
        && nutrObj.nutrient_id !== '851' // ala
        && nutrObj.nutrient_id !== '621' // dha
        && nutrObj.nutrient_id !== '208' // kcal
        && nutrObj.nutrient_id !== '203' // protein
        && nutrObj.nutrient_id !== '204' // fat
        && nutrObj.nutrient_id !== '205' // carbs
      ) {
        return nutrObj;
      }
      return null;
    }).map(nutrObj => {
      // formatting the micronutrient list items
      return (
        <ListGroupItem key={nutrObj.nutrient_id}>
          <strong>{nutrObj.nutrient}: </strong>
          {
            nutrObj.value === '--' ?
              0 + nutrObj.unit
              : nutrObj.value + nutrObj.unit
          }
        </ListGroupItem>
      );
    });

    return [
      (<ListGroupItem key='omega-3'>
        <strong>Omega-3 Fatty Acids: </strong>
        { omega3 }
      </ListGroupItem>),
      ...nutrientList
    ];
  }
  makeMacronutrientList() {
    const nutrients = this.state.details.nutrients;
    const kcal = nutrients.find(nutrObj => {
      return nutrObj.nutrient_id === '208';
    });
    const protein = nutrients.find(nutrObj => {
      return nutrObj.nutrient_id === '203';
    });
    const fat = nutrients.find(nutrObj => {
      return nutrObj.nutrient_id === '204';
    });
    const carbohydrate = nutrients.find(nutrObj => {
      return nutrObj.nutrient_id === '205';
    });

    return (
      <div>
        <ListGroupItem>
          <strong>Calories: </strong>
          { kcal.value }
        </ListGroupItem>
        <ListGroupItem>
          <strong>Protein: </strong>
          { protein.value + protein.unit}
        </ListGroupItem>
        <ListGroupItem>
          <strong>Fat: </strong>
          { fat.value + fat.unit}
        </ListGroupItem>
        <ListGroupItem>
          <strong>Carbohydrate: </strong>
          { carbohydrate.value + carbohydrate.unit}
        </ListGroupItem>
      </div>
    );
  }
  parseNutrients() {
    return (
      <ListGroup>
        <h4>Macronutrients</h4>
        {this.makeMacronutrientList()}
        <h4>Micronutrients</h4>
        {this.makeMicronutrientsList()}
      </ListGroup>
    );
  }
  renderNutrientDetails() {
    return (
      <div>
        <h4>{this.state.details.name}</h4>
        <p><em>Serving Size: {this.state.details.measure}</em></p>
        {this.parseNutrients()}
        <Link to="/search-ingredients">
          <Button
            bsSize="large"
            bsStyle="primary"
            block
            style={{
              marginBottom: '10px'
            }}
          >
            Next
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
