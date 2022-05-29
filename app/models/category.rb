class Category < ActiveHash::Base
  self.data = [
    { id: 1, name: '---'},
    { id: 2, name: 'HTML'},
    { id: 3, name: 'CSS'},
    { id: 4, name: 'Ruby'},
    { id: 5, name: 'JavaScript'},
    { id: 6, name: 'C#'},
    { id: 7, name: 'PHP'},
    { id: 8, name: 'Python'},
    { id: 9, name: 'Java'},
    { id: 10, name: 'その他'}
  ]
  include ActiveHash::Associations
  has_many :contents
end

