/*
 * @class Funds
 *
 * View for each fund
 * */
;(function (root, template) {
  'use strict';
  
  root.Trades = Backbone.View.extend({
    initialize: function (options) {
      this.trades = options.trades;
      this.render();
    },

    render: function () {
      this.$el.html(this.template());
      this.renderTrades();
    },

    renderTrades: function () {
      _(this.trades).each(this.addTrade, this);
    },

    addTrade: function (model) {
              
    }
  });

} (Magnetis.Backbone.views, Magnetis.helpers.template));
