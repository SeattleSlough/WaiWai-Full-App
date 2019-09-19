class ActivitiesController < ActionController::API
def index
    @activties = Activity.all 
    render json: @activities
end


def create 
    @actvitiy = Activity.create(name: params[:name], provider: params[:provider], description: params[:description], image: params[:image], cost: params[:cost])
end

def filter
    @activities = Activity.all 
    @filter = @activities.slice(request.headers['HTTP_INDEX'].to_i,5)
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
