import SearchIngredient from '../components/SearchIngredient';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addSearchIngredientResults
} from '../actions';

const mapStateToProps = state => {
  return {
    results: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addSearchIngredientResults }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIngredient);
