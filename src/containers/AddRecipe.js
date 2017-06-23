import React, { Component } from 'react';
import { addRecipe } from '../actions';
import { connect } from 'react-redux';

export class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      ingredients: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleIngredientsChange(event) {
    this.setState({ ingredients: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.closeModal(event);
    this.props.dispatch(addRecipe(this.state));
  }
  render() {
    const modalDisplay = {
      display: this.props.display ? 'block' : 'none'
    }
    return (
      <div
        id="myModal"
        style={modalDisplay}
        onClick={this.props.closeModal}>
        <form className="myModal-content container">
          <h4 className="myModal-header">Add a Recipe</h4>
          <div className="form-group">
            <label>Recipe</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a Title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="form-group">
            <label>Ingredients</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ingredients, separated, by, commas"
              value={this.state.ingredients}
              onChange={this.handleIngredientsChange}
            />
          </div>
          <div className="pull-right">
            <button
              className="btn btn-primary submit-recipe"
              onClick={this.handleSubmit}>
              Add Recipe
            </button>
            <button
              className="btn btn-default close-modal"
              onClick={this.props.closeModal}>
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddRecipe);
