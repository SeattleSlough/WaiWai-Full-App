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
        @user.activities.push(Activity.find(request.headers['HTTP_ACTIVITY']))
    end
    render json: @user.activities
end

def deleteReservation
    @user = User.find(request.headers['HTTP_USER'])
    @user.activities.delete(Activity.find(request.headers['HTTP_ACTIVITY']))
end
    
    

end
