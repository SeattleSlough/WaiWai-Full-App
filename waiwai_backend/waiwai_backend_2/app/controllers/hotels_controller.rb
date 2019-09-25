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
        @filter = @hotels.slice(request.headers['HTTP_INDEX'].to_i,4)
        render json: @filter
    end

    def create_reservation
        @user = User.find(request.headers['HTTP_USER'])
        if @user.hotels.length === 0
            @user.hotels.push(Hotel.find(request.headers['HTTP_HOTEL']))
        else 
            render json: @user.hotels
        end
        render json: @user.hotels
    end

    def delete_reservation
        @user = User.find(request.headers['HTTP_USER'])
        @user.hotels.delete(Hotel.find(request.headers['HTTP_HOTEL']))
    end

    def view_reservations
        @user = User.find(request.headers['HTTP_USER'])
        render json: @user.hotels
    end

end