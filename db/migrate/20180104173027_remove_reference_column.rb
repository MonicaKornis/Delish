class RemoveReferenceColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :recipes, :likable_type
    remove_column :recipes, :likable_id
  end
end
