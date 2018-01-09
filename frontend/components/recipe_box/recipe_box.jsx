// import React from 'react';
// import {Link} from 'react-router-dom';
// import RecipeIndexItem from '../main_page/recipe_index_item';
//
//
// class RecipeBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLike = this.handleLike.bind(this);
//     this.handleColor = this.handleColor.bind(this);
//   }
//
//   componentDidMount() {
//     this.props.fetchRecipes();
//   }
//
//
//     handleLike(recipeId){
//       if(this.props.likedRecipes.includes(recipeId)) {
//         return (e) => {
//
//           // this.setState({likedRecipes: this.state.likedRecipes.});
//           return this.props.unlikeRecipe(recipeId);
//         };
//       } else {
//         return (e) => {
//           return this.props.likeRecipe(recipeId);
//         };
//       }
//     }
//
//     handleColor(recipeId) {
//       if(this.props.likedRecipes.includes(recipeId)) {
//           return "red";
//       } else {
//         return "white";
//       }
//     }
//
//     render() {
//     if (this.props.recipes.length === 0) return <div> </div>;
//
//       let likedRecipeIds = this.props.likedRecipes;
//       let likedRecipes = this.props.recipes.map ((recipe,index) => {
//         if(likedRecipeIds.includes(recipe.id)) {
//          return (
//            recipe
//          );
//         }
//       });
//
//       likedRecipes = likedRecipes.filter((el) => el !== undefined);
//
//
//       let likedRecipesitems = likedRecipes.map((recipe,index) => <RecipeIndexItem recipe={recipe} key={index+1} action={this.handleLike} id={recipe.id}  color={this.handleColor(recipe.id)}/>);
//
//       return (
//         <div>
//         {likedRecipesitems}
//         </div>
//       );
//     }
// }
//
// export default RecipeBox;
