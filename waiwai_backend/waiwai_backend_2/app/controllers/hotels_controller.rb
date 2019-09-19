class HotelsController < ActionController::API

    def index
        @hotels = Hotel.all 
        render json: @hotels
    end

    def create 
        @hotel = Hotel.create(name: params[:name], description: params[:description], image: params[:image], rate: params[:rate], stars: params[:stars])
    end

    def filter
        @hotels = Hotel.all 
        @filter = @hotels.slice(request.headers['HTTP_INDEX'].to_i,5)
        render json: @filter
    end

    def reserve
        hotel = Hotel.find_by(request.headers['HTTP_HOTEL'])
        user = User.find_by(request.headers['HTTP_USER'])
        @reservation = user.hotel
        byebug
    end
end