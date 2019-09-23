class Restaurant < ApplicationRecord
    has_many :users, through: :restaurants_users
    has_many :restaurants_users
end
