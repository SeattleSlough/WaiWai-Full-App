class RestaurantKeysController < ActionController::API

    def index
        @restaurant_keys = RestaurantKey.all
        render json: @restaurant_keys
    end
    
    def create
       @restaurant_key = RestaurantKey.create(user_id: params[:user_id], restaurant_id: params[:restaurant_id])
    end
end
