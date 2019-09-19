class Hotel < ApplicationRecord
    has_many :users, through: :hotels_users
    has_many :hotels_users
end
