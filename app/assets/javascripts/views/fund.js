/*
 * @class Funds
 *
 * View for each fund
 * */
;(function (root) {
  'use strict';
  
  root.Fund = Backbone.View.extend({
    className: 'magnetis-fund',

    initialize: function (options) {
      this.trades = options.trades;
      this.render();
    },

    renderTrades: function () {
      var trades = new Magnetis.Backbone.views.Trades({
        trades: this.trades
      });

      this.$el.find('.magnetis-trades').html(trades.el);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      this.renderTrades();
    }

  });

} (Magnetis.Backbone.views));
