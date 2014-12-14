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
      this.tradeUniqueUrl = options.tradeUniqueUrl;
      this.model = options.model;

      this.prepare();
    },

    prepare: function () {
      this.model.prototype.defaultUrl = this.tradeUniqueUrl;
    },

    byFundId: function (id) {
     return this.where({
       fund_id: id
     });
    }
  });

} (Magnetis.Backbone.collections));
