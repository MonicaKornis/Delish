class AddLikableToRecipe < ActiveRecord::Migration[5.1]
  def change
    add_reference :recipes, :likable, polymorphic: true, index: true
  end
end
