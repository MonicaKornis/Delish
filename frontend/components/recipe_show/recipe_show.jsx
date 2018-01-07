import React from 'react';
import {Link} from 'react-router-dom';


class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    debugger
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
        <div>
          <br></br>
          <br></br>
            <br></br>
            <br></br>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      );


  }
}

export default RecipeShow;
