class AddInvestmentIdToTrades < ActiveRecord::Migration
  def change
    add_column :trades, :investment_id, :integer
  end
end
