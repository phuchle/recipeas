import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ControlLabel, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ModifyTitle extends Component {
  constructor(props) {
    super(props);

    if (this.props.titleDetails) {
      this.state = {
        title: this.props.titleDetails.title,
        allergens: this.props.titleDetails.allergens,
        servings: this.props.titleDetails.servings
      };
    } else {
      this.state = {
        title: '',
        allergens: '',
        servings: ''
      };
    }

    this.renderNextButton = this.renderNextButton.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAllergensChange = this.handleAllergensChange.bind(this);
    this.handleServingsChange = this.handleServingsChange.bind(this);
  }
  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }
  handleAllergensChange(event) {
    this.setState({
      allergens: event.target.value
    });
  }
  handleServingsChange(event) {
    this.setState({
      servings: event.target.value
    });
  }
  renderNextButton = () => {
    return this.props.nextButton ?
      (
        <div>
          <Link to="/modify-ingredients">
            <Button
              bsSize="large"
              bsStyle="primary"
              block
              style={this.props.nextButtonStyle}
              onClick={() => this.props.modifyTempTitle(this.state)}
            >
              Next
            </Button>
          </Link>
          <Link to="/">
            <Button
              bsSize="large"
              onClick={() => {
                this.props.clearTempRecipe();
                this.props.clearSearchIngredientResults();
              }}
              block
            >
              Back
            </Button>
          </Link>
        </div>
      )
    : null;
  }
  render() {
    return (
      <div>
        <h4>Recipe Information</h4>
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          value={this.state.title}
          placeholder="Enter an awesome title"
          onChange={this.handleTitleChange}
        />
        <ControlLabel>Servings</ControlLabel>
        <FormControl
          type="text"
          value={this.state.servings}
          placeholder="How many people will this recipe feed?"
          onChange={this.handleServingsChange}
        />
        <ControlLabel>Allergens</ControlLabel>
        <FormControl
          type="text"
          value={this.state.allergens}
          placeholder="What allergens does this food contain?"
          onChange={this.handleAllergensChange}
        />
        { this.renderNextButton() }
      </div>
    );
  }
};

ModifyTitle.propTypes = {
  nextButton: PropTypes.bool.isRequired,
  nextButtonStyle: PropTypes.object,
  titleDetails: PropTypes.object,
  modifyTempTitle: PropTypes.func.isRequired
};

export default ModifyTitle;
