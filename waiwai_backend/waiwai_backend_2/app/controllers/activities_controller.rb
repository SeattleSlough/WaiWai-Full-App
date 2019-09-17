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
    
    

end
