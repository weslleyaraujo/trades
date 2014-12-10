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
      this.itemTemplate = options.itemTemplate;
      this.item = options.item;
      this.bind();
    },

    bind: function () {
      this.trades.on('sync', this.onSync, this);
    },

    onSync: function () {
      this.render();
    },

    render: function () {
      this.$el.html('');
      this.collection.each(this.addOne, this);
    },

    addOne: function (model) {
      var item = new this.item({
        model: model,
        template: this.itemTemplate
      });

      this.$el.append(item.el);
    }
  })

} (Magnetis.Backbone.views));
