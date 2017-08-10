import ModifyTitle from '../components/ModifyTitle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modifyTempTitle, clearTempRecipe, clearSearchIngredientResults } from '../actions/index';

const mapStateToProps = state => {
  return {
    titleDetails: state.tempRecipe.titleDetails
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    modifyTempTitle,
    clearTempRecipe,
    clearSearchIngredientResults
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModifyTitle);
