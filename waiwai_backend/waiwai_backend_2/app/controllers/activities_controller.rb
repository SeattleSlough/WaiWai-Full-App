class ActivitiesController < ApplicationController
def index
    @activties = Activity.all 
    render json: @activities
end


def create 
    @actvitiy = Activity.create(name: params[:name], provider: params[:provider], description: params[:description], image: params[:image], cost: params[:cost])
end
    
    

end
