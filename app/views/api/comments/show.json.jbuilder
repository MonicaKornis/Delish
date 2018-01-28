json.extract! @comment, :title, :body, :recipe_id, :id, :author_id, :likes
json.authorName @comment.author.name
