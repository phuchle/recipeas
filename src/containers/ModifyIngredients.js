import ModifyIngredients from '../components/ModifyIngredients';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    ingredientList: state.tempRecipe.ingredients
  };
};

export default connect(mapStateToProps)(ModifyIngredients);
