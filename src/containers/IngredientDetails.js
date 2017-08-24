import IngredientDetails from '../components/IngredientDetails';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTempIngredient, clearSearchIngredientResults
} from '../actions/index';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addTempIngredient,
    clearSearchIngredientResults
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(IngredientDetails);
