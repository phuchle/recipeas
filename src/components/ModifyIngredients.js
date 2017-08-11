import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';
import {
  Button, Pager, ListGroup, ListGroupItem
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import v4 from 'uuid';

class ModifyIngredients extends Component {
  constructor(props) {
    super(props);

    this.renderNextButton = this.renderNextButton.bind(this);
    this.renderPlusButton = this.renderPlusButton.bind(this);
    this.renderIngredients = this.renderIngredients.bind(this);
  }
  renderNextButton() {
    return this.props.nextButton ?
      (
        <Pager>
          <Link to="/review">
            <Button
              bsSize="large"
              bsStyle="primary"
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
        <PlusButton className="pull-right" />
      </Link>
    ) : null;
  }
  renderIngredients() {
    return (
      <ListGroup style={{ marginTop: '25px' }}>
        {this.props.ingredientList.map(ingredient => {
          return (
            <ListGroupItem key={v4()}>
            <Link to={{
                pathname: '/ingredient-details',
                state: {
                  ingredient: ingredient
                }
              }}
              >
              {`${ingredient.name}, ${ingredient.measure}`}
            </Link>
            <MinusButton
              handleClick={() => this.props.removeTempIngredient(ingredient.id)}
            />
          </ListGroupItem>
        );
        })}
      </ListGroup>
    );
  }
  render() {
    return (
      // <Grid>
      //   <Row>
      //     <Col sm={12} lg={8} lgOffset={2}>
      <div>
        <h4>
          Ingredients
          { this.renderPlusButton() }
        </h4>
        { this.renderIngredients() }
        { this.renderNextButton() }
      </div>
      //     </Col>
      //   </Row>
      // </Grid>
  );
  }
}

ModifyIngredients.propTypes = {
  nextButton: PropTypes.bool.isRequired,
  nextButtonStyle: PropTypes.object,
  plusButton: PropTypes.bool.isRequired,
  ingredientList: PropTypes.array.isRequired
};

export default ModifyIngredients;
