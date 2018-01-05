import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = ({recipe}) => (
    <div className='recipeIndexItem'>
      <Link to={`/recipes/${recipe.id}`}/>
      <img className="recipeIndexImage" src={recipe.img}/>
      <div className='recipeInfo'>
        <h3>{recipe.title}</h3>
        <h4> By Monica Kornis </h4>
        <h5> {`${recipe.cooking_time} minutes`}</h5>
      </div>
    </div>

);

export default RecipeIndexItem;
