class CreateActivityKeys < ActiveRecord::Migration[5.2]
  def change
    create_table :activity_keys do |t|
      t.integer :user_id
      t.integer :activity_id

      t.timestamps
    end
  end
end
