Rails.application.routes.draw do
  get 'hotels/filter', to: 'hotels#filter'
  get 'restaurants/filter', to: 'restaurants#filter'
  get 'hotels/reservation', to: 'hotels#create_reservation'
  get 'hotels/reservations', to: 'hotels#view_reservations'
  get 'restaurants/reservation', to: 'restaurants#create_reservation'
  get 'restaurants/reservations', to: 'restaurants#view_reservations'
  resources :activites
  resources :hotels
  resources :restaurants
  resources :cars
  resources :hotelsusers
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end
end