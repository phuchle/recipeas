import ModifyTitle from '../components/ModifyTitle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modifyTempTitle, clearTempRecipe } from '../actions/index';

const mapStateToProps = state => {
  return {
    titleDetails: state.tempRecipe.titleDetails
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ modifyTempTitle, clearTempRecipe }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModifyTitle);
