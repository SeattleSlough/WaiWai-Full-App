class User < ApplicationRecord
    has_many :hotels_users
    has_many :hotels, through: :hotels_users
    has_secure_password
    validates :username, uniqueness: true
end
