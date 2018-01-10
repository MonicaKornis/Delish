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

  # def likes
  #   @like = Like.create(user_id: current_user.id, likeable_type: 'Comment', likeable_id: params[:comment_id])
  # end
  #
  # def remove_like
  #   @like = Like.find(params[:comment_id]).likes.find_by(user_id: current_user.id)
  #   if @like
  #     @like.destroy
  #   end
  #   render :likes
  # end

  def comment_params
    params.require(:comment).permit(:title, :body, :recipe_id)
  end
end
