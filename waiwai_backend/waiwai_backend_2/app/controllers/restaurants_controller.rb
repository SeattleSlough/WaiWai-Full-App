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
        @filter = @restaurants.slice(request.headers['HTTP_INDEX'].to_i,3)
        render json: @filter
    end

    def create_reservation
        @user = User.find(request.headers['HTTP_USER'])
        if @user.restaurants.length <= 15
            @user.restaurants.push(Restaurant.find(request.headers['HTTP_RESTAURANT']))
        else
            render json: @user.restaurants
        end
        render json: @user.restaurants
    end

    def view_reservations
        @user = User.find(request.headers['HTTP_USER'])
        render json: @user.restaurants
    end

    def delete_reservation
        @user = User.find(request.headers['HTTP_USER'])
        @user.restaurants.delete(Restaurant.find(request.headers['HTTP_RESTAURANT']))
        render json: @user.restaurants
    end
end
