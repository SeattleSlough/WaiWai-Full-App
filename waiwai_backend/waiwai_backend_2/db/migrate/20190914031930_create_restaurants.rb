class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.text :name
      t.text :description
      t.text :image
      t.integer :cost_per_person
      t.integer :stars
    end
  end
end
