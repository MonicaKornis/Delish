class Recipe < ApplicationRecord
  validates :title, :description, :author, :ingredients, :cooking_time, :img_url, presence: true

  belongs_to :author,
  class_name: 'User',
  foreign_key: :author_id

  has_many :likes, as: :likeable
end
