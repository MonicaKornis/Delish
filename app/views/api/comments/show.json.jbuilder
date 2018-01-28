json.extract! @comment, :title, :body, :recipe_id, :id, :author_id
json.authorName @comment.author.name
