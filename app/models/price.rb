class Price < ActiveRecord::Base
  belongs_to :fund
  attr_accessible :date, :price, :fund_id
end
