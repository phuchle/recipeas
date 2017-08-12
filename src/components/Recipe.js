import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Well, ListGroup } from 'react-bootstrap';
import MinusButton from './MinusButton';
import EditButton from './EditButton';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.toggleRecipe = this.toggleRecipe.bind(this);
  }
  toggleRecipe() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div className='recipe-container'>
        <h4 className="recipe-title" onClick={this.toggleRecipe}>{this.props.title}</h4>
        <Collapse in={this.state.open}>
          <div> {/* this div exists for smooth collapse animation */}
            <Well>
              <ListGroup>{this.props.ingredients}</ListGroup>
              <EditButton
                handleClick={() => {
                this.props.fillEditRecipeModal(this.props.id);
              }} />
              <MinusButton
                className="pull-right delete-recipe"
                handleClick={() =>
                  this.props.removeRecipe(this.props.id)
                }
              />
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  removeRecipe: PropTypes.func.isRequired,
};

export default Recipe;
