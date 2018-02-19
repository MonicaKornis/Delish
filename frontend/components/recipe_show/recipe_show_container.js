import { connect } from 'react-redux';
import RecipeShow from './recipe_show.jsx';
import { withRouter } from 'react-router-dom';
import { fetchRecipe, likeRecipe, unlikeRecipe, deleteRecipe } from '../../actions/recipe_actions';
import { likeComment, unlikeComment} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let recipes = Object.values(state.entities.recipes);
  let recipe = state.entities.recipes[ownProps.match.params.recipeId];
  let buttonMessage = state.session.currentUser.likedRecipeIds.includes(parseInt(ownProps.match.params.recipeId)) ?
  'Remove From Recipe Box' : 'Save To Recipe Box';

  return {
  recipes: Object.values(state.entities.recipes),
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  currentUser: state.session.currentUser.id,
  likedRecipes: state.session.currentUser.likedRecipeIds,
  buttonMessage: buttonMessage
  };
};

const mapDispatchToProps = dispatch => {

  return {
  fetchRecipe: id => dispatch(fetchRecipe(id)),
  likeRecipe: id => dispatch(likeRecipe(id)),
  unlikeRecipe: id => dispatch(unlikeRecipe(id)),
  deleteRecipe: id => dispatch(deleteRecipe(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeShow));
