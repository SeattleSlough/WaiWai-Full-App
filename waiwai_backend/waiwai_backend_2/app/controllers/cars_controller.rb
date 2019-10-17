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
            @user.cars.push(Car.find(request.headers['HTTP_CAR']))
        end
        render json: @user.hotels
    end

    def deleteReservation
        @user = User.find(request.headers['HTTP_USER'])
        @user.cars.delete(Car.find(request.headers['HTTP_CAR']))
    end
end
