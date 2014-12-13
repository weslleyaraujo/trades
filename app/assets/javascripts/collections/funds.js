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
      this.pricesUrl = options.pricesUrl;
      this.bind();
    },

    bind: function () {
      this.on('sync', this.onSync, this);
    },

    onSync: function () {
      this.getPrices(this.first());
    },

    getPrices: function (model) {
      var prices = new Magnetis.Backbone.collections.Prices({
        url: this.getPricesUrl(model.id)
      });

      prices.on('sync', function () {
        model.set('has_prices', true);
        model.set('prices', prices);
        this.nextFund();
      }, this);

      prices.fetch();
    },

    getPricesUrl: function (id) {
      return this.pricesUrl.replace(/:id/, id);
    },

    nextFund: function () {
      var next = this.findWhere({
        has_prices: false
      });

      if (next) {
        this.getPrices(next);
      }
    }
  });

} (Magnetis.Backbone.collections));
