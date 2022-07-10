Rails.application.routes.draw do
  devise_for :users
  root to: "contents#index"
  resources :contents do
    collection do
      get 'search'
    end
  end
end
