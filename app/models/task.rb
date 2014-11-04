class Task < ActiveRecord::Base
  def doer
    u = User.where(:id => self.user_id)
    u.first.email
  end
end
