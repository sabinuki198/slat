class Content < ApplicationRecord
  validates :title, presence: true
  validates :text, presence: true
  validates :category_id, numericality: { other_than: 1, message: "can't be blank" }
  validates :images, length: { minimum: 0, maximum: 3, message: "は3枚以下にしてください" }

  belongs_to :user
  has_many_attached :images
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category

  def self.search(search)
    if search != ""
      Content.where('title LIKE(?)', "%#{search}%")
    else
      Content.all
    end
  end
end
