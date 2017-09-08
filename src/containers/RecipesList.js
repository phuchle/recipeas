import RecipesList from '../components/RecipesList';
import {
  removeRecipe,
  loadStoredRecipe,
  activateEditMode
} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    removeRecipe,
    loadStoredRecipe,
    activateEditMode
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
