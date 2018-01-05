class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :author_id,  null: false
      t.integer :cooking_time
      t.string :img_url

      t.timestamps
    end
  end
end
