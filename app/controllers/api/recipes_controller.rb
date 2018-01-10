class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end

  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.author_id = current_user.id
    if @recipe.save
      render "api/recipes/show"
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def update
    @recipe = Recipe.find(params[:id])
    @recipe.update_attributes(recipe_params)
    if @recipe.save!
      render :show
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
    # debugger
    # if !@recipe
    #   render json: @recipe.errors.full_messages, status: 404
    # end
  end

  def likes
    @like = Like.create(user_id: current_user.id, likeable_type: 'Recipe', likeable_id: params[:recipe_id])
  end

  def remove_like
    @like = Recipe.find(params[:recipe_id]).likes.find_by(user_id: current_user.id)
    if @like
      @like.destroy
    end
    render :likes
  end

  def recipe_params
    params.require(:recipe).permit(:title,:description,:cooking_time,ingredients:[], steps:[])
  end
end
