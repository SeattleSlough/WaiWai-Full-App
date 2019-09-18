class CreateHotels < ActiveRecord::Migration[5.2]
  def change
    create_table :hotels do |t|
      t.text :name
      t.float :rate
      t.float :stars
      t.text :room
      t.text :description
      t.text :image
    end
  end
end
