import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecipe, clearTempRecipe } from '../actions';
import ReviewRecipe from '../components/ReviewRecipe';

const mapStateToProps = state => {
  return {
    tempRecipe: state.tempRecipe
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addRecipe, clearTempRecipe }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewRecipe);
