class Api::RatingsController < ApplicationController
  def create
  end

  def destroy
  end

  def update
  end

  private
  def recipe_params
    params.permit(:recipe).require(:rating)
  end
end
