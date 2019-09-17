class CarsController < ActionController::API

    def index
        @cars = Car.all 
        render json: @ cars
    end

    def create
        @car = Car.create(name: params[:name], image: params[:image], rate: params[:rate])
    end
end
