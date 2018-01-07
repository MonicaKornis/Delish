import React from 'react';
import {Link} from 'react-router-dom';


class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    let id = parseInt(this.props.match.params.recipeId);
    this.props.fetchRecipe(id);
  }

  componentWillReceiveProps(nextProps) {
    let nextId = nextProps.match.params.recipeId;
    if(nextId !== this.props.match.params.recipeId){
      this.props.fetchRecipe(nextProps.match.params.recipeId);
    }
  }

  render() {
      const recipe = this.props.recipe;
      if (!recipe) {
        return <div>Loading...</div>;
      }

      return (
        <div className='recipeContainer'>
          <div className='recipe'>
            <br></br>
            <br></br>
            <br></br>
            <header className='recipeTitle'>
              <h1>{recipe.title}</h1>
            </header>

              <div className='subHeader'>
                <ul>
                  <li><span>Yield: </span> 4 servings</li>
                  <li><span>Time: </span>{`${recipe.cooking_time} minutes`}</li>
                </ul>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <h1>{recipe.title}</h1>
              <h4 id='author'> By Monica Kornis </h4>
                <img className="recipeImage" src={recipe.image_url}/>
          </div>
        </div>
      );


  }
}

export default RecipeShow;

// let ingredients = [];
//
// if(this.props.recipe) {
//   ingredients = this.props.recipe.ingredients.map( (ingredient,idx) =>
//   <li key={idx}>{`${idx+1}: ${ingredient}`}</li>
//   );
// }
