json.extract! @recipe, :title, :description, :cooking_time, :ingredients, :id, :steps
json.image_url image_url(@recipe.image.url)
