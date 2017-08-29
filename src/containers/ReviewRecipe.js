import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecipe, editRecipe, clearTempRecipe } from '../actions';
import ReviewRecipe from '../components/ReviewRecipe';

const mapStateToProps = state => {
  return {
    tempRecipe: state.tempRecipe
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addRecipe,
    editRecipe,
    clearTempRecipe
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewRecipe);
