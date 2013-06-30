class Investment < ActiveRecord::Base
  belongs_to :fund
  has_many :trades
  accepts_nested_attributes_for :trades
  attr_accessible :trades_attributes
end
