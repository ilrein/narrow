class Task < ActiveRecord::Base
  has_one :user
  def doer
    u = User.where(:id => self.user_id)
    u.first.email
  end
end
