class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
    # validates :username, uniqueness: true
    # validates :username, presence: true

    def index
        @users = User.all 
        render json: @users
    end

    def profile
        render json: {user: UserSerializer.new(current_user)}, status: :accepted
    end
    
    def create
        @user = User.new(username: params[:username], password: params[:password])
        if @user.save
            @token = encode_token(user_id: @user.id)
           render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
        else
          render json: { error: 'failed to create user' }, status: :not_acceptable
        end
      end
end

