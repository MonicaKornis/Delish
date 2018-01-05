@recipes.each do |recipe|
  json.set! recipe.id do
    json.extract! recipe, :title, :description, :cooking_time, :ingredients
    json.image_url image_url(recipe.image.url)
  end
end
