/*
 * @class Trades
 *
 * Trades collection
 * */
;(function (root) {
  'use strict';

  root.Trades = Backbone.Collection.extend({
    initialize: function (options) {
      this.url = options.url;
      this.tradeUrl = options.tradeUrl;
      this.model = options.model;

      this.prepare();
    },

    prepare: function () {
      this.model.prototype.defaultUrl = this.tradeUrl;
    }
  });

} (Magnetis.Backbone.collections));
