/*
 * @class Trade
 *
 * View for each trade
 * */
;(function (root, template) {
  'use strict';
  
  root.Trade = Backbone.View.extend({
    tagName: 'tr',

    events: {
      'change [name="kind"]': 'onKindChange'
    },

    initialize: function (options) {
      this.render();
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    },

    onKindChange: function (event) {
      var $target = $(event.target),
          icon = $target.find('option:selected').data('referenceIcon');

      this.changeIcon(icon);
    },

    changeIcon: function (className) {
      this.$el.find('.magnetis-trades-reference-icon i')
          .removeClass()
          .addClass(className);
    }

  });

} (Magnetis.Backbone.views));
