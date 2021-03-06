# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130617155230) do

  create_table "funds", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "investments", :force => true do |t|
    t.integer  "fund_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "investments", ["fund_id"], :name => "index_investments_on_fund_id"

  create_table "prices", :force => true do |t|
    t.date    "date"
    t.decimal "price"
    t.integer "fund_id"
  end

  add_index "prices", ["fund_id"], :name => "index_prices_on_fund_id"

  create_table "trades", :force => true do |t|
    t.integer  "fund_id"
    t.date     "date"
    t.decimal  "shares"
    t.integer  "kind"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.integer  "investment_id"
  end

  add_index "trades", ["fund_id"], :name => "index_trades_on_fund_id"

end
