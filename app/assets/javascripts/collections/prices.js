/*
 * @class Prices
 *
 * Prices collection
 * */
;(function (root) {
  'use strict';

  root.Prices = Backbone.Collection.extend({
    model: Magnetis.Backbone.models.Price,
    initialize: function (options) {
      this.url = options.url;
    },

    lastDate: function () {
      return this.createDate(this.last().get('date'));
    },

    firstDate: function () {
      return this.createDate(this.first().get('date'));
    },

    createDate: function (date) {
      date = new Date(date);
      date.setDate(date.getDate() + 1);
      return new Date(date);
    }
  });

} (Magnetis.Backbone.collections));
