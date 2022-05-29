class Content < ApplicationRecord
  validatas :title, presence: true
  validatas :text, presence: true
  validates :category_id, numericality: { other_than: 1, message: "can't be blank" }

  belongs_to :user
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category
end
