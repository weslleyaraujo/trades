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
      'change [name="kind"]': 'onKindChange',
      'keyup [name="shares"]': 'calculate',
      'change [name="date"]': 'onChangeDate',
      'click .remove': 'onRemoveClick',
    },

    initialize: function (options) {
      this.prices = options.prices;
      this.render();
      this.changeIcon(this.getIcon(this.$el.find('[name="kind"]').val()));

      this.bindUI();
      this.calculate();
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    },

    onKindChange: function (event) {
      var $target = $(event.target);
      this.changeIcon(this.getIcon($target.val()));
      this.model.set('kind', $target.val());
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

      this.$el.find('[name="total"]').autoNumeric({
        mDec: 2,
        vMin: '0',
        aSep: '.',
        aDec: ','
      });

    },

    calculate: function () {
      var price = this.getPriceByDay(this.getActualDay()),
          shares = this.getActualShares(),
          total = Math.floor((price * shares) * 100) / 100;

      this.setPrice(price);
      this.setTotal(total);
    },

    getPriceByDay: function (date) {
      var price;
      try {
        price = parseFloat(this.prices.findWhere({
          date: date
        }).get('price'), 10);

        return Magnetis.helpers.toExact(price, 8);

      } catch (e) {}
    },

    getActualShares: function () {
      return this.model.set('shares', Magnetis.helpers.toExact(this.$el.find('[name="shares"]').autoNumeric('get'), 8))
          .get('shares');
    },

    getActualDay: function () {
      return this.model.set('date', Magnetis.helpers.toUsDate(this.$el.find('[name="date"]').val() || this.model.get('date')))
          .get('date');
    },

    setPrice: function (price) {
      this.$el.find('[name="price"]').val(price);
    },

    setTotal: function (total) {
      this.$el.find('[name="total"]').autoNumeric('set', total).val();
    },

    onChangeDate: function (event) {
      event.preventDefault();
      this.calculate();
    },

    onRemoveClick: function () {
      this.$el.remove();
      
      // if it is already persisted
      if (_.isNumber(this.model.id)) {
        this.model.destroy();
      }
    }

  });

} (Magnetis.Backbone.views));
