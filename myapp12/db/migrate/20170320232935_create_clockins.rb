class CreateClockins < ActiveRecord::Migration[5.0]
  def change
    create_table :clockins do |t|
      t.datetime   :date
      t.datetime   :start
      t.datetime   :end
      t.integer    :away_time
      t.integer    :total_work_time
      t.string     :away_reason
      t.integer    :employee_id
      
      t.timestamps
    end
  end
end
