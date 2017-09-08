import RecipeDetails from '../components/RecipeDetails';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps)(RecipeDetails);
