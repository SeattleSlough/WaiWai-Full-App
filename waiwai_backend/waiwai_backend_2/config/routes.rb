Rails.application.routes.draw do
  get 'hotels/filter', to: 'hotels#filter'
  get 'restaurants/filter', to: 'restaurants#filter'
  resources :activites
  resources :hotels
  resources :restaurants
  resources :cars
  resources :carkeys
  resources :hotelkeys
  resources :restaurtantkeys
  resources :activitykeys
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end
end