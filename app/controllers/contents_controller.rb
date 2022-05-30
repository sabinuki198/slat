class ContentsController < ApplicationController

  def index
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
end
