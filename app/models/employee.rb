class Employee < ActiveRecord::Base
  def full_name
    "#{self.first_name} #{self.middle_name}. #{self.last_name}"
  end
  
  def initials
    "#{self.first_name[0]}#{self.middle_name[0]}#{self.last_name[0]}"
  end
end
