Rails.application.routes.draw do
  root "root#root"

  resources :posts, only: [:new, :show, :index, :create, :update, :destroy]
end
