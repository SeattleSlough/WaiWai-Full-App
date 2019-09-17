class RestaurantsController < ActionController::API

    def index
        @restaurants = Restaurant.all 
        render json: @restaurants 
    end

    def create 
        @restaurant = Restaurant.create(name: params[:name], description: params[:description], image: params[:image], cost: params[:cost_per_person], stars: params[:stars])
    end
end
