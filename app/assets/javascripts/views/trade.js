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
      this.calculate();
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
      // bind datepicker
      this.$el.find('[name="date"]').datepicker({
        minDate: this.prices.firstDate(),
        maxDate: this.prices.lastDate()
      });

      // bind numeric inputs
      // TODO: move those info to a config
      this.$el.find('[name="shares"]').autoNumeric({
        mDec: 8,
        vMax: '99999999999999999999.99',
        vMin: '0',
        aSep: '.',
        aDec: ','
      });
    },

    calculate: function () {
      var price = this.getPriceByDay(this.getActualDay()),
          shares = this.getActualShares();

      conso
    },

    getPriceByDay: function (date) {
      try {
        return this.prices.findWhere({
          date: date
        }).get('price');
      } catch (e) {}
    },

    getActualShares: function () {
      return this.$el.find('[name="shares"]').val() || this.model.get('shares');
    },

    getActualDay: function () {
      return Magnetis.helpers.toUsDate(this.$el.find('[name="date"]').val() || this.model.get('date'));
    },

    setPrice: function (price) {
      this.$el.find('[name="price"]').val(price);
    }

  });

} (Magnetis.Backbone.views));
