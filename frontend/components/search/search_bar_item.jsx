import React from 'react';

const SearchBartItem = ({recipe, classStr, history, clearSearch}) => (
  <div className={classStr} onClick={
      (e) => {
        history.push(`/recipes/${recipe.id}`);
        clearSearch();
      }
    }>
    <img src={recipe.image_url} />
    <p>{recipe.title}</p>
  </div>
);

export default SearchBartItem;
