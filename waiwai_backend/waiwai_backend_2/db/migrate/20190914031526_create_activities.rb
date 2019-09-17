class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.text :name
      t.text :provider
      t.text :description
      t.text :image
      t.integer :cost
    end
  end
end
