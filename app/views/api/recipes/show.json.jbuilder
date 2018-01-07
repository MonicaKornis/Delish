json.extract! @recipe, :title, :description, :cooking_time, :ingredients, :id
json.image_url image_url(@recipe.image.url)
