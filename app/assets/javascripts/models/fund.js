/*
 * @class Funds
 *
 * Model for each fund
 * */
;(function (root) {
  'use strict';
  
  root.Fund = Backbone.Model.extend({
    defaults: {
      created_at: '',
      id: '',
      name: '',
      updated_at: '',

      // front end data
      price: '',
      has_prices: false
    }
  });

} (Magnetis.Backbone.models));
