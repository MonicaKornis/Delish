class RemoveImgUrl < ActiveRecord::Migration[5.1]
  def change
    remove_column :recipes, :img_url 
  end
end
