class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if current_user.authored_comments.include?(@comment)
      comment.update_attributes(comment_params)
    else
      render json: @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if current_user.authored_comments.include?(@comment)
      @comment.destroy
    end
  end

  def comment_params
    params.require(:comment).permit(:title, :body, :recipe_id)
  end
end
