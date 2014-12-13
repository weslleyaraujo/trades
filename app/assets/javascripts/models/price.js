/*
 * @class Price
 *
 * Model for each price
 * */
;(function (root) {
  'use strict';
  
  root.Price = Backbone.Model.extend({
    defaults: {
      date: '',
      fund_id: '',
      id: '',
      price: ''
    },

    brlDate: function () {
      return this.get('date').split('-').reverse().join('/');
    }
  });

} (Magnetis.Backbone.models));
