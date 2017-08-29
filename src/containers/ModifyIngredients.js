import ModifyIngredients from '../components/ModifyIngredients';
import { removeTempIngredient } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    ingredientList: state.tempRecipe.ingredients
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeTempIngredient }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModifyIngredients);
