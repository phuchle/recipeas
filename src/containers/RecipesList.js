import React, { Component } from 'react';
import { addRecipe, editRecipe, removeRecipe } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Recipe from '../components/Recipe';
import PlusButton from '../components/PlusButton';
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import PropTypes from 'prop-types';

export class RecipesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAddRecipe: false,
      displayEditRecipe: false,
      activeRecipe: {
        title: '',
        ingredients: ''
      },
      targetId: ''
    };
    // methods that affect modal state
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.fillEditRecipeModal = this.fillEditRecipeModal.bind(this);

    //methods that have to do with modal visibility
    this.showAddRecipe = this.showAddRecipe.bind(this);
    this.hideAddRecipe = this.hideAddRecipe.bind(this);
    this.showEditRecipe = this.showEditRecipe.bind(this);
    this.hideEditRecipe = this.hideEditRecipe.bind(this);

    // Makes a list of Recipe components
    this.renderList = this.renderList.bind(this);

  }
  handleTitleChange(event) {
    this.setState({
      ...this.state,
      activeRecipe: {
        ...this.state.activeRecipe,
        title: event.target.value
      }
    });
  }
  handleIngredientsChange(event) {
    this.setState({
      ...this.state,
      activeRecipe: {
        ...this.state.activeRecipe,
        ingredients: event.target.value
      }
    });
  }
  resetState() {
    this.setState({
      ...this.state,
      activeRecipe: {
        title: '',
        ingredients: ''
      },
      targetId: ''
    });
  }
  showAddRecipe() {
    this.setState({ ...this.state, displayAddRecipe: true });
  }
  hideAddRecipe() {
    this.setState({ ...this.state, displayAddRecipe: false }, () => this.resetState());
  }
  showEditRecipe() {
    this.setState({ ...this.state, displayEditRecipe: true });
  }
  hideEditRecipe() {
    this.setState({ ...this.state, displayEditRecipe: false }, () => this.resetState());
  }
  fillEditRecipeModal(id) {
    const targetRecipe = this.props.recipes.find(recipe => {
      return recipe.id === id;
    });

    this.setState({
      ...this.state,
      activeRecipe: {
        title: targetRecipe.title,
        ingredients: targetRecipe.ingredients
      },
      targetId: id
    }, () => this.showEditRecipe());
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.displayAddRecipe) {
      this.props.addRecipe(this.state.activeRecipe);
    }
    else if (this.state.displayEditRecipe) {
      this.props.editRecipe(this.state.targetId, this.state.activeRecipe);
    }
  }
  renderList() {
    const { removeRecipe } = this.props;

    return this.props.recipes.map(recipe => {
      const ingredientsList = recipe.ingredients.split(',').map(ingredient => {
        return (
          <ListGroupItem key={recipe.title + ingredient}>
            { ingredient }
          </ListGroupItem>
        )
      });

      return (
        <ListGroupItem key={recipe.title}>
          <Recipe
            title={recipe.title}
            ingredients={ingredientsList}
            showEditRecipe={this.showEditRecipe}
            removeRecipe={removeRecipe}
            fillEditRecipeModal={this.fillEditRecipeModal}
            id={recipe.id}
          />
        </ListGroupItem>
      );
    });
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} md={6} lg={6} lgOffset={3}>
            <span>
              <h1>
                Recipes
                <Link to="/add-recipe">
                <PlusButton className="pull-right"/>
              </Link>
            </h1>
          </span>

          <ListGroup>
            { this.renderList() }
          </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

RecipesList.PropTypes = {
  recipes: PropTypes.array.isRequired,
  addRecipe: PropTypes.func.isRequired,
  editRecipe: PropTypes.func.isRequired,
  removeRecipe: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addRecipe, editRecipe, removeRecipe }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
