/*
 * @class Prices
 *
 * Prices collection
 * */
;(function (root) {
  'use strict';

  root.Prices = Backbone.Collection.extend({
    initialize: function (options) {
      this.url = options.url;
    }
  });

} (Magnetis.Backbone.collections));
