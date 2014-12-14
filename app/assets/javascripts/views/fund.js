/*
 * @class Funds
 *
 * View for each fund
 * */
;(function (root) {
  'use strict';
  
  root.Fund = Backbone.View.extend({
    className: 'magnetis-fund',

    events: {
      'click #save': 'onClickSave'
    },

    initialize: function (options) {
      this.trades = options.trades;
      this.render();
    },

    renderTrades: function () {
      var trades = new Magnetis.Backbone.views.Trades({
        trades: this.trades,
        prices: this.model.get('prices'),
        fundId: this.model.get('id')
      });

      this.$el.find('.magnetis-trades').html(trades.el);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      this.renderTrades();
    },

    onClickSave: function (event) {
      var options = {
        silent: true
      };

      event.preventDefault();

      _(this.getTrades()).each(function (model) {
        options.type = (!_.isNumber(model.id)) ? 'POST' : 'PUT';
        model.save(null, options);
      });
    },

    getTrades: function () {
      return _(this.trades).first().collection.toArray();
    }

  });

} (Magnetis.Backbone.views));
