class Comment < ApplicationRecord
  validates :title, :body, :author_id, :recipe_id, presence: true 

  belongs_to :author,
  class_name: 'User',
  foreign_key: :author_id

  belongs_to :recipe,
  class_name: 'Recipe',
  foreign_key: :recipe_id

  has_many :likes, as: :likeable

end
