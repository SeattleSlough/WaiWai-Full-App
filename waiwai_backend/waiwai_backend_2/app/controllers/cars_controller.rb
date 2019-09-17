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
end
