import ModifyTitle from '../components/ModifyTitle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modifyTempTitle } from '../actions/index';

const mapStateToProps = state => {
  return {
    titleDetails: state.tempRecipe
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ modifyTempTitle }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModifyTitle);
