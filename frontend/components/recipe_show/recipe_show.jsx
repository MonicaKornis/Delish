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
    // debugger
    // let nextId = nextProps.recipeId;
    // if(nextId !== this.props.match.params.recipeId){
      this.props.fetchRecipe(nextProps.match.params.recipeId);
    // }
  }

  render() {
      const recipe = this.props.recipe;
      if (!recipe) {
        return <div>Loading...</div>;
      }

      return (
        <div className='recipeContainer'>
          <div className='recipe'>
            <header className='recipeTitle'></header>
              <br></br>
              <br></br>
              <br></br>
              <h1>{recipe.title}</h1>
              <h1></h1>
          </div>
        </div>
      );


  }
}

export default RecipeShow;
