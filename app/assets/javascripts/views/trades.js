/*
 * @class Trades
 *
 * View for all trades
 * */
;(function (root) {
  'use strict';
  
  root.Trades = Backbone.View.extend({
    initialize: function (options) {
      this.trades = options.trades;
      this.render();
    },

    render: function () {
      this.$el.html(this.template());
      this.renderTrades();

      // add empty trade
     this.addTrade();
    },

    renderTrades: function () {
      _(this.trades).each(this.addTrade, this);
    },

    addTrade: function (model) {
      model = model || new Backbone.Model();

      var trade = new Magnetis.Backbone.views.Trade({
        model: model
      });

      this.$el.find('tbody').append(trade.el);
    }
  });

} (Magnetis.Backbone.views));
