class ContentsController < ApplicationController

  def index
  end
  
  def new
  end

  def create
  end

  private

  def content_parameter
    params.require(:contents)
end
