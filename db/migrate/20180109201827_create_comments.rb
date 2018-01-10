class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :recipe_id, null: false
      t.string :title, null: false
      t.string :body, null: false

      t.timestamps
    end
  end
end
