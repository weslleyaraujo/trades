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
      updated_at: '',

      // front end date
      formated_date: ''
    },

    initialize: function () {
      this.prepare();
    },

    prepare: function () {
      this.set('formated_date', Magnetis.helpers.toBrDate(this.get('date')));
    },

    url: function () {
      return this.defaultUrl.replace(/:id/, this.id);
    }
  });

} (Magnetis.Backbone.models));
