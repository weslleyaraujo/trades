/*
 * @class Funds
 *
 * Funds collection
 * */
;(function (root) {
  'use strict';

  root.Funds = Backbone.Collection.extend({
    initialize: function (options) {
      this.url = options.url;
      this.model = options.model;
    }
  });

} (Magnetis.Backbone.collections));
