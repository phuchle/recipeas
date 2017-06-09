import React, { Component } from 'react';

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    console.log('submitted');
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
            <input type="text" className="form-control" placeholder="Enter a name"/>
          </div>
          <div className="form-group">
            <label>Ingredients</label>
            <input type="text" className="form-control" placeholder="Enter ingredients, separated, by, commas"/>
          </div>
          <div className="pull-right">
            <button
              className="btn btn-primary"
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
