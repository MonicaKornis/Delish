Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :recipes, only: [:index, :show, :create, :update]

    resources :comments, only: [:update,:destroy,:create]

    post 'recipes/:recipe_id/likes', to: 'recipes#likes'
    delete 'recipes/:recipe_id/likes', to: "recipes#remove_like"

    post 'comments/:comment_id/likes', to: 'comments#likes'
    delete 'comments/:comment_id/likes', to: 'comments#remove_like'

    resources :ratings, only: [:create, :update, :destroy]
  end

  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
