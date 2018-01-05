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

export const createRecipe = (recipe) => {
  return(
    $.ajax({
      method: 'GET',
      url: `api/recipes`,
      data: { recipe: recipe }
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
