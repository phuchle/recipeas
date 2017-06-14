import React, { Component } from 'react';
import AddRecipe from './AddRecipe';
import { connect } from 'react-redux';

export default class RecipesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddRecipe: false
    }

    this.showAddRecipe = this.showAddRecipe.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  showAddRecipe(event) {
    event.preventDefault();

    this.setState({
      showAddRecipe: true
    });
  }
  closeModal(event) {
    event.preventDefault();
    const target = event.target

    if (
      target.id === 'myModal' ||
      target.classList.contains('close-modal') ||
      target.classList.contains('submit-recipe')) {
        this.setState({
          showAddRecipe: false
        });
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Recipes</h1>
        <button className="btn btn-primary" onClick={this.showAddRecipe}>Add Recipe</button>
        <AddRecipe display={this.state.showAddRecipe} closeModal={this.closeModal}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

}
