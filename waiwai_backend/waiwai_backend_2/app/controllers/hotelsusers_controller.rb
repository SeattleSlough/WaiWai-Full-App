class HotelsusersController < ActionController::API

    def index
        @reservations = HotelsUser.all
        render json: @reservations
    end

end
