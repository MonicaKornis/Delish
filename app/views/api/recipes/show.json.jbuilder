json.recipe do
  json.extract! @recipe, :title, :description, :cooking_time, :ingredients, :steps ,:id
  json.image_url image_url(@recipe.image.url)
  json.commentIds @recipe.comment_ids
  json.author @recipe.author.name
  json.authorId @recipe.author.id
  json.image_url asset_path(@recipe.image.url)
  json.ratings @recipe.ratings
end

json.comments do
  @recipe.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :title, :body, :recipe_id, :id, :author_id
      json.authorName comment.author.name
      json.numLikes comment.likes.length
    end
  end
end
