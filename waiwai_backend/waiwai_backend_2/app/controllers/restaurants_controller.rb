class RestaurantsController < ActionController::API

    def index
        @restaurants = Restaurant.all 
        render json: @restaurants 
    end

    def create 
        @restaurant = Restaurant.create(name: params[:name], description: params[:description], image: params[:image], cost: params[:cost_per_person], stars: params[:stars])
    end

    def filter
        @restaurants = Restaurant.all 
        @filter = @restaurants.slice(request.headers['HTTP_INDEX'].to_i,5)
        render json: @filter
    end

    def reservation
        @user = User.find(request.headers['HTTP_USER'])
        if @user.hotels.length <= 15
            @user.hotels.push(Hotel.find(request.headers['HTTP_HOTEL']))
        end
        render json: @user.hotels
    end

    def deleteReservation
        @user = User.find(request.headers['HTTP_USER'])
        @user.hotels.delete(Hotel.find(request.headers['HTTP_HOTEL']))
    end
end
