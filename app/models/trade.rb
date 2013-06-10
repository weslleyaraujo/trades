class Trade < ActiveRecord::Base
  belongs_to :fund
  attr_accessible :date, :kind, :shares

  validates :kind, :inclusion => { :in => [0, 1],
        :message => "%{value} is not a valid, it should be 0 for 'subscription' or 1 for 'redemption'" }
end
