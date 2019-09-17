class HotelsController < ApplicationController

    def index
        @hotels = Hotel.all 
        render json: @hotels
    end

    def create 
        @hotel = Hotel.create(name: params[:name], description: params[:description], image: params[:image], rate: params[:rate], stars: params[:stars])
    end
end
