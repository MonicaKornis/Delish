class Recipe < ApplicationRecord
  validates :title, :description, :author, :ingredients, :cooking_time, :steps, presence: true

  belongs_to :author,
  class_name: 'User',
  foreign_key: :author_id

  has_many :likes, as: :likeable

  has_many :comments,
  class_name: 'Comment',
  foreign_key: :recipe_id,
  primary_key: :id

  has_attached_file :image,  default_url: "citrus.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
