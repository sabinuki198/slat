class Content < ApplicationRecord
  validates :title, presence: true
  validates :text, presence: true
  validates :category_id, numericality: { other_than: 1, message: "can't be blank" }

  belongs_to :user
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category
end
