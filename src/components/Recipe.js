import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Collapse, Well } from 'react-bootstrap';

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
              <ul>{this.props.ingredients}</ul>
              <Button className="edit-recipe" onClick={() => {
                this.props.fillEditRecipeModal(this.props.title);
              }}>Edit</Button>
              <Button className="delete-recipe" bsStyle="danger" onClick={() => this.props.removeRecipe(this.props.title)}>Delete</Button>
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
  showEditRecipe: PropTypes.func.isRequired,
  removeRecipe: PropTypes.func.isRequired,
  fillEditRecipeModal: PropTypes.func.isRequired
}

export default Recipe;
