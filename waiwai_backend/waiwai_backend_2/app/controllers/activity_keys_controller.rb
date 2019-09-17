class ActivityKeysController < ActionController::API
def index 
    @activities = ActivityKey.all 
    render json: @activities
end

def create
    @activity_key = ActivityKey.create(user_id: params[:user_id], restaurant_id: params[:restaurant_id])
end


end
