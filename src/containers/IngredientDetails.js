import IngredientDetails from '../components/IngredientDetails';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTempIngredient, editTempIngredient, clearSearchIngredientResults
} from '../actions';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addTempIngredient,
    editTempIngredient,
    clearSearchIngredientResults
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(IngredientDetails);
