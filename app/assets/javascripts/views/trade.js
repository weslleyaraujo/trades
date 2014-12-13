/*
 * @class Trade
 *
 * View for each trade
 * */
;(function (root, template) {
  'use strict';
  
  root.Trade = Backbone.View.extend({
    referenceIcons: {
      0: "icons-sprite-arrow-green",
      1: "icons-sprite-arrow-blue",
      2: "icons-sprite-arrow-ir"
    },

    tagName: 'tr',

    events: {
      'change [name="kind"]': 'onKindChange'
    },

    initialize: function (options) {
      this.prices = options.prices;
      this.render();
      this.changeIcon(this.getIcon(this.$el.find('[name="kind"]').val()));

      this.bindUI();
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    },

    onKindChange: function (event) {
      var $target = $(event.target);
      this.changeIcon(this.getIcon($target.val()));
    },

    getIcon: function (reference) {
     try {
       return this.referenceIcons[reference];
     } catch (e) {
       throw new Error ('Cant find any icon with the reference value ' + value);
     }
    },

    changeIcon: function (className) {
      this.$el.find('.magnetis-trades-reference-icon i')
          .removeClass()
          .addClass(className);
    },

    bindUI: function () {
      this.$el.find('[name="date"]').datepicker({
        minDate: this.prices.firstDate(),
        maxDate: this.prices.lastDate()
      });
    }

  });

} (Magnetis.Backbone.views));
