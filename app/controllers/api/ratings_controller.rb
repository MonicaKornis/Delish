class Api::RatingsController < ApplicationController
  def create
    @rating = Rating.new(rating_params)
    @rating.recipe_id = @recipe.id
    @rating.user_id = current_user.id
    if @rating.save
      render :show
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def update
    @rating = Rating.find(params[:id])
    if current_user.ratings.include?(@rating)
      rating.update_attributes(rating_params)
      render :show
    else
      render json: @rating.errors.full_messages
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(:rating,:recipe_id)
  end
end
