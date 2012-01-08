class AddEmployeeInfo < ActiveRecord::Migration
  def change
    add_column :employees, :email, :string
    add_column :employees, :direct_number, :string
  end
end
