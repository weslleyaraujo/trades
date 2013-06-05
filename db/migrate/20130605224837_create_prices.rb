class CreatePrices < ActiveRecord::Migration
  def change
    create_table :prices do |t|
      t.date :date
      t.decimal :price
      t.references :fund

    end
    add_index :prices, :fund_id
  end
end
