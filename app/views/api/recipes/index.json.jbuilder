@recipes.each do |recipe|
  json.set! recipe.id do
    json.extract! recipe, :title, :description, :cooking_time,:img_url, :ingredients
  end
end
