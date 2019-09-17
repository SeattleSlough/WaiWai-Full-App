class CreateHotelKeys < ActiveRecord::Migration[5.2]
  def change
    create_table :hotel_keys do |t|
      t.integer :user_id
      t.integer :hotel_id

      t.timestamps
    end
  end
end
