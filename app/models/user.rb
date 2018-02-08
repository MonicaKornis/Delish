class User < ApplicationRecord
  attr_reader :password
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_many :authored_recipes,
  class_name: 'Recipe',
  foreign_key: :author_id,
  primary_key: :id

  has_many :likes

  has_many :liked_recipes,
  through: :likes,
  source: :likeable,
  source_type: "Recipe"

  has_many :liked_comments,
  through: :likes,
  source: :likeable,
  source_type: 'Comment'

  has_many :authored_comments,
  class_name: 'Comment',
  foreign_key: :author_id,
  primary_key: :id

  has_many :ratings,
  class_name: 'Rating',
  foreign_key: :user_id,
  primary_key: :id

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email,password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
