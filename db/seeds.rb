# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#


Fund.delete_all
Price.delete_all
Trade.delete_all

fund = Fund.create(:name => 'Sul America Expertise Fundo de Investimento em Ações')

last_price = rand(20) + 1
(1.year.ago.to_date..Date.yesterday).each do |date|
  daily_return = rand(800) / 10_000.to_f
  price = (last_price * (1 + daily_return)).round(8)
  last_price = price
  puts price
  fund.prices.create(:date => date, :price => price)
end
