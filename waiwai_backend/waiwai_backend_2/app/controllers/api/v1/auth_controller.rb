class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        puts params[:password]
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            token = encode_token({user_id: @user.id})
            render json: {user_id: @user.id,    user: UserSerializer.new(@user), jwt: token}, status: :accepted
        else
            render json: {message: 'Invalid username or password'}, status: :unauthorized
        end
    end

    private 
