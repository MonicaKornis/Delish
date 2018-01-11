export const fetchRecipes = () => {
  return(
    $.ajax({
      method: 'GET',
      url: 'api/recipes'
    })
  );
};

export const fetchRecipe = (id) => {
  return(
    $.ajax({
      method: 'GET',
      url: `api/recipes/${id}`
    })
  );
};

export const createRecipe = (formData) => {
  return(
    $.ajax({
      method: 'POST',
      url: `api/recipes`,
      contentType: false,
      processData: false,
      dataType: 'json',
      data:  formData,
    })
  );
};

export const updateRecipe = (recipe) => {
  return(
    $.ajax({
      method: 'GET',
      url: `api/recipes/${recipe.id}`,
      data: { recipe: recipe }
    })
  );
};

export const likeRecipe = (recipeId) => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/recipes/${recipeId}/likes`
    })
  );
};

export const unlikeRecipe = (recipeId) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/recipes/${recipeId}/likes`
    })
  );
};
