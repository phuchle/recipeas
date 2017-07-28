import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
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
  parseNutrients() {
    const nutrientList = this.state.details.nutrients.map(nutrient => {
      return (
        <ListGroupItem key={nutrient.nutrient_id}>
          <strong>{nutrient.nutrient}:</strong> {nutrient.value} { nutrient.unit}
        </ListGroupItem>
      );
    });

    return (
      <ListGroup>
        {nutrientList}
      </ListGroup>
    );
  }
  renderNutrientDetails() {
    return (
      <div>
        <h4>{this.state.details.name}</h4>
        <p>{this.state.details.measure}</p>
        <p><em>Nutrients:</em></p>
        {this.parseNutrients()}
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
