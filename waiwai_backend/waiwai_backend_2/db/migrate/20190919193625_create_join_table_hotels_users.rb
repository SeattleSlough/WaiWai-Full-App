class CreateJoinTableHotelsUsers < ActiveRecord::Migration[5.2]
  def change
    create_join_table :hotels, :users do |t|
      # t.index [:hotel_id, :user_id]
      # t.index [:user_id, :hotel_id]
    end
  end
end
