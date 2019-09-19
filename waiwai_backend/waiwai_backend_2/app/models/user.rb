class User < ApplicationRecord
    has_secure_password
    # validates :username, uniqueness: true
    belongs_to :hotel
    belongs_to :car
end
