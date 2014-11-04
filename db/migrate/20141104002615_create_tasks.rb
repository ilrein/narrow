class CreateTasks < ActiveRecord::Migration
  def change
    change_table :tasks do |t|
      t.string :name
      t.boolean :completed, :default => false
    end
  end
end
