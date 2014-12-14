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
      kind: '0',
      shares: '',
      updated_at: '',

      // front end date
      formated_date: ''
    },

    initialize: function () {
      this.bind();
      this.formatDate();
    },

    bind: function () {
      this.on('change:date', this.formatDate, this);
    },

    formatDate: function () {
      this.set('formated_date', Magnetis.helpers.toBrDate(this.get('date')));
    },

    url: function () {
      return this.defaultUrl.replace(/:id/, this.id);
    },

    validate: function (attributes) {

      if (!attributes.date.match(/([0-9]{4})-([0-9]{2})-([0-9]{2})/g)) {
        return 'Enter a valid date';
      }

      if (!_.isEmpty(attributes.shared)) {
        return 'Enter number of shares';
      }

    },

    isNew: function () {
      try {
        return !!this.id.match(/new-trade/);
      } catch (e) {
        return false;
      }
    }
  });

} (Magnetis.Backbone.models));
