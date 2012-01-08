class AddDisplayOrder < ActiveRecord::Migration
  def change
    add_column :employees, :display_order, :integer
  end
end
