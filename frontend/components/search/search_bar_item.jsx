import React from 'react';

const SearchBartItem = ({recipe, classStr, history, clearSearch ,index}) => {
  return (
    <div>
      <div className={index===0 ? 'search-bar-header' : ''}>{index === 0 ? "Suggested Recipes" : ''}</div>
    <div className={classStr} onClick={
      (e) => {
        history.push(`/recipes/${recipe.id}`);
        clearSearch();
      }
    }>
    <img id='search-image' src={recipe.image_url} />
    <p>{recipe.title}</p>
  </div>
  </div>
);
};

export default SearchBartItem;
