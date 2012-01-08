class AddBioFields < ActiveRecord::Migration
  def change
    add_column :employees, :short_bio, :text
    add_column :employees, :full_bio, :text
  end
end
