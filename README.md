# テーブル設計

## users テーブル

| Column             | Type      | Options                   |
| ------------------ | --------- | ------------------------- |
| email              | string    | null: false, unique: true |
| encrypted_password | string    | null: false               |
| nickname           | string    | null: false               |

### Association

- has_many :contents

## contents テーブル

| column         | Type          | Options                        |
| -------------- | ------------- | ------------------------------ |
| title          | string        | null: false                    |
| text           | text          | null: false                    |
| category_id    | integer       | null: false                    |
| user           | references    | null: false, foreign_key: true |

### Association

- belongs_to :user