/*
 * @class Trades
 *
 * View for all trades
 * */
;(function (root) {
  'use strict';
  
  root.Trades = Backbone.View.extend({
    events: {
      'click .magnetis-trades-button a': 'onAddClick'
    },

    initialize: function (options) {
      this.trades = options.trades;
      this.prices = options.prices;
      this.fundId = options.fundId;
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
      model = model || new Magnetis.Backbone.models.Trade({
        fund_id: this.fundId
      });

      this.trades[0].collection.add(model);

      var trade = new Magnetis.Backbone.views.Trade({
        model: model,
        prices: this.prices
      });

      this.$el.find('tbody').append(trade.el);
    },

    onAddClick: function () {
      this.addTrade();
    }

  });

} (Magnetis.Backbone.views));
