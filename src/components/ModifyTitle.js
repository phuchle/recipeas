import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  ControlLabel,
  FormGroup,
  FormControl,
  HelpBlock,
  Button
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class ModifyTitle extends Component {
  constructor(props) {
    super(props);

    if (this.props.titleDetails) {
      this.state = {
        titleDetails: {
          title: this.props.titleDetails.title,
          allergens: this.props.titleDetails.allergens,
          servings: this.props.titleDetails.servings,
        },
        fireRedirect: false,
        disableSubmitButton: false
      };
    } else {
      this.state = {
        titleDetails: {
          title: '',
          allergens: '',
          servings: '',
        },
        fireRedirect: false,
        disableSubmitButton: true
      };
    }

    this.renderNextButton = this.renderNextButton.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAllergensChange = this.handleAllergensChange.bind(this);
    this.handleServingsChange = this.handleServingsChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(event) {
    let newState = {
      titleDetails: {
        ...this.state.titleDetails,
        title: event.target.value
      },
      disableSubmitButton: event.target.value.length > 0 ? false : true
    };
    this.setState(newState);
  }
  handleAllergensChange(event) {
    this.setState({
      titleDetails: {
        ...this.state.titleDetails,
        allergens: event.target.value
      }
    });
  }
  handleServingsChange(event) {
    this.setState({
      titleDetails: {
        ...this.state.titleDetails,
        servings: event.target.value
      }
    });
  }
  getValidationState() {
    const length = this.state.titleDetails.title.length;

    if (length > 0) return 'success';
    else return 'error';
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.getValidationState() === 'success') {
      this.props.modifyTempTitle(this.state.titleDetails);
      this.setState({
        fireRedirect: true
      });
    }
  }
  renderNextButton = () => {
    return this.props.nextButton ?
      (
        <form>
          <Button
            type="submit"
            bsSize="large"
            bsStyle="primary"
            style={this.props.nextButtonStyle}
            onClick={this.handleSubmit}
            disabled={this.state.disableSubmitButton}
            block
          >
            Next
          </Button>
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
        </form>
      )
    : null;
  }
  render() {
    return (
      <div>
        <h4>Recipe Information</h4>
        <FormGroup
          controlId="recipeTitle"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            value={this.state.titleDetails.title}
            placeholder="Enter an awesome title"
            onChange={this.handleTitleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>A title is required.</HelpBlock>
        </FormGroup>
        <ControlLabel>Servings</ControlLabel>
        <FormControl
          type="text"
          value={this.state.titleDetails.servings}
          placeholder="How many people will this recipe feed?"
          onChange={this.handleServingsChange}
        />
        <ControlLabel>Allergens</ControlLabel>
        <FormControl
          type="text"
          value={this.state.titleDetails.allergens}
          placeholder="What allergens does this food contain?"
          onChange={this.handleAllergensChange}
        />
        { this.renderNextButton() }
        { this.state.fireRedirect && (
          <Redirect to="/modify-ingredients" />
        )}
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
