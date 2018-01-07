class AddingStepsColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :recipes, :steps, :text, array:true, default: []
  end
end
