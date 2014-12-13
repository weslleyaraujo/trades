/*
 * @class Trade
 *
 * View for each trade
 * */
;(function (root, template) {
  'use strict';
  
  root.Trade = Backbone.View.extend({
    tagName: 'tr',

    initialize: function (options) {
      this.render();
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

} (Magnetis.Backbone.views));
