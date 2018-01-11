import { connect } from 'react-redux';
import RecipeShow from './recipe_show.jsx';
import { fetchRecipe, likeRecipe, unlikeRecipe } from '../../actions/recipe_actions';
import { likeComment, unlikeComment} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  // let likedComments = state.session.currentUser.likedCommentIds || [];
  let buttonMessage = state.session.currentUser.likedRecipeIds.includes(parseInt(ownProps.match.params.recipeId)) ?
  'Saved' : 'Save To Recipe Box';
  return {
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  likedRecipes: state.session.currentUser.likedRecipeIds,
  buttonMessage: buttonMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  fetchRecipe: id => dispatch(fetchRecipe(id)),
  likeRecipe: id => dispatch(likeRecipe(id)),
  unlikeRecipe: id => dispatch(unlikeRecipe(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeShow);
