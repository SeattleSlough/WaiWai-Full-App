class CarKeysController < ActionController::API

    def index
        @car_keys = CarKey.all 
        render json: @car_keys
    end
    
    def create
        @car_key = CarKey.create(user_id: params[:user_id], restaurant_id: params[:restaurant_id])
    end

end
