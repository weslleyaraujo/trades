class Price < ActiveRecord::Base
  belongs_to :fund
  attr_accessible :date, :price
end
