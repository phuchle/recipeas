import ModifyIngredients from '../components/ModifyIngredients';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    ingredients: state.tempRecipe.ingredients
  };
};

export default connect(mapStateToProps)(ModifyIngredients);
