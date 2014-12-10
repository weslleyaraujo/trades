/*
 * @class Trade
 *
 * Model for each fund
 * */
;(function (root) {
  'use strict';
  
  root.Trade = Backbone.Model.extend({
    defaults: {
      created_at: '',
      date: '',
      fund_id: '',
      id: '',
      investment_id: '',
      kind: '',
      shares: '',
      updated_at: ''
    }
  })

} (Magnetis.Backbone.models));
