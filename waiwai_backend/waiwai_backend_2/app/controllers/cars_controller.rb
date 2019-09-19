class CarsController < ActionController::API

    def index
        @cars = Car.all 
        render json: @ cars
    end

    def create
        @car = Car.create(name: params[:name], image: params[:image], rate: params[:rate])
    end

    def filter
        @cars = Car.all 
        @filter = @cars.slice(request.headers['HTTP_INDEX'].to_i,5)
        render json: @filter
    end

    def reservation
        @user = User.find(request.headers['HTTP_USER'])
        if @user.hotels.length === 0
            @user.hotels.push(Hotel.find(request.headers['HTTP_HOTEL']))
        end
        render json: @user.hotels
    end

    def deleteReservation
        @user = User.find(request.headers['HTTP_USER'])
        @user.hotels.delete(Hotel.find(request.headers['HTTP_HOTEL']))
    end
end
