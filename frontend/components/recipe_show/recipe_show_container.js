import { connect } from 'react-redux';
import RecipeShow from './recipe_show.jsx';
import { fetchRecipe } from '../../actions/recipe_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  recipe: state.entities.recipes[ownProps.match.params.recipeId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
  fetchRecipe: id => dispatch(fetchRecipe(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeShow);
