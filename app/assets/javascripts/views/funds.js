/*
 * @class Funds
 *
 * View for all the funds
 * */
;(function (root) {
  'use strict';

  root.Funds = Backbone.View.extend({
    initialize: function (options) {
      this.el = options.el;
      this.trades = options.trades;
      this.bind();
    },

    bind: function () {
      this.trades.on('reset', this.onSync, this);
    },

    onSync: function () {
      this.render();
    },

    render: function () {
      this.$el.html('');
      this.collection.each(this.addOne, this);
    },

    addOne: function (model) {
      var item = new Magnetis.Backbone.views.Fund({
        model: model,
        trades: this.getTrades(model.id)
      });

      this.$el.append(item.el);
    },

    getTrades: function (id) {
     return this.trades.where({
       fund_id: id
     });

    }

  });

} (Magnetis.Backbone.views));
