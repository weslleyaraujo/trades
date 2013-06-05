class CreateTrades < ActiveRecord::Migration
  def change
    create_table :trades do |t|
      t.references :fund
      t.date :date
      t.decimal :shares
      t.integer :kind

      t.timestamps
    end
    add_index :trades, :fund_id
  end
end
