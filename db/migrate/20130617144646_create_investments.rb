class CreateInvestments < ActiveRecord::Migration
  def change
    create_table :investments do |t|
      t.references :fund

      t.timestamps
    end
    add_index :investments, :fund_id
  end
end
