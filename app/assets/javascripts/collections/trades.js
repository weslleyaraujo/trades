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
      this.model = options.model;
    }
  });

} (Magnetis.Backbone.collections));
