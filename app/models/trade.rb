class Trade < ActiveRecord::Base
  belongs_to :fund
  attr_accessible :date, :kind, :shares
end
