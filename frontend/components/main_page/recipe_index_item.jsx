import React from 'react';
import { Link } from 'react-router-dom';

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  redirect() {
    if(this.props.currentUser === "" ) {
      return `/recipes/${this.props.recipe.id}`;
    } else {
      return "/login";
    }
  }

  render(){
    debugger
    let recipe = this.props.recipe;
    let action = this.props.action;
    let color = this.props.color;
    let author = this.props.author;

    return(
      <div className='col-recipe-index'>
          <img className="recipeIndexImage" src={recipe.image_url}/>

          <div className='recipeInfo'>
            <div className='titleWrapper'>
              <Link to={this.redirect} id='recipeName'>{recipe.title}</Link>
              <h4 id='author'> By {author} </h4>
            </div>


            <div className='recipeFooter'>
              <h5 id='cookingTime'> {`${recipe.cooking_time} minutes`}</h5>
              <i className="fa fa-bookmark-o" id='bookmark' onClick={action(recipe.id)} id={color}></i>
            </div>
          </div>
      </div>
    );
  }
}


// const RecipeIndexItem = ({recipe, action, color, author}) => (
//   <div className='col-recipe-index'>
//       <img className="recipeIndexImage" src={recipe.image_url}/>
//
//       <div className='recipeInfo'>
//         <div className='titleWrapper'>
//           <Link to={`/recipes/${recipe.id}`} onClick={redirect()} id='recipeName'>{recipe.title}</Link>
//           <h4 id='author'> By {author} </h4>
//         </div>
//
//
//         <div className='recipeFooter'>
//           <h5 id='cookingTime'> {`${recipe.cooking_time} minutes`}</h5>
//           <i className="fa fa-bookmark-o" id='bookmark' onClick={action(recipe.id)} id={color}></i>
//         </div>
//       </div>
//   </div>
//
// );
//
export default RecipeIndexItem;
