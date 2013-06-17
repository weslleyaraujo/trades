class Trade < ActiveRecord::Base
  belongs_to :fund
  belongs_to :investment
  attr_accessible :date, :kind, :shares, :fund_id, :investment_id

  validates :kind, :inclusion => { :in => [0, 1],
        :message => "%{value} is not a valid, it should be 0 for 'subscription' or 1 for 'redemption'" }

  validates_presence_of :date, :kind, :shares
end
