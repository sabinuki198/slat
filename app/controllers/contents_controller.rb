class ContentsController < ApplicationController

  def index
    content_extract
  end
  
  def new
    @content = Content.new
  end

  def create
    @content = Content.new(content_params)
    if @content.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

    def content_params
      params.require(:content).permit(:title, :text, :category_id, :image).merge(user_id: current_user.id)
    end

    def content_extract
      if user_signed_in? #ユーザーログイン時のみ、ユーザーに結びついた記事をカテゴリー別に取得、表示するためのインスタンスを生成する
        @category = Category.all 
        @contents = Content.where(user_id: current_user.id)
        @user_content = []
        @category.each do |num|
          @user_content << instance_variable_set('@c'+(num.id).to_s, @contents.where(category_id: num.id))
        end
      end
    end
end
