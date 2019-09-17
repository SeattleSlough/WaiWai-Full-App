class HotelKeysController < ActionController::API

    def index
        @hotels = Hotel.all 
        render json: @hotels
    end

    def create
        @hotel = Hotel.create(user_id: params[:user_id], hotel_id:params[:hotel_id])
    end
end
