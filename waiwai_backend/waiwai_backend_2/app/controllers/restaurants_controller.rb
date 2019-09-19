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
end