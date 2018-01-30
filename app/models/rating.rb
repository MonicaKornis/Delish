class Rating < ApplicationRecord
  validates :user_id, :recipe_id, presence: true
  validates_inclusion_of :rating, :in => [1,2,3,4,5]

  belongs_to :author,
  class_name: 'User',
  foreign_key: :author_id

  belongs_to :recipe,
  class_name: 'Recipe',
  foreign_key: :recipe_id
end
