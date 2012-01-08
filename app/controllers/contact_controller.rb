class ContactController < ApplicationController
  def index
    @employees = Employee.find(:all, :order => 'display_order') 
  end
  
  def show
    @employee = Employee(params[:id])
  end
end
