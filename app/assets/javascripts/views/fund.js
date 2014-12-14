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
      'click .confirm': 'onClickSave'
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

    onClickSave: function () {
      this.requests = [];
      this.saveQueue = [];

      _(this.trades.byFundId(this.model.id)).each($.proxy(function (model) {
          if (model.isNew()) {
            this.addToSave(model);
            return;
          }

          this.editModel(model);

      }, this));

      if (!_.isEmpty(this.saveQueue)) {
        this.save();
      };
    },

    addToSave: function (model) {
      if (model.isValid()) {
        this.requests.push('multiple');
        this.saveQueue.push(model);
      }
    },

    editModel: function (model) {
      model.save(null, {
        success: $.proxy(this.onSaveSuccess, this)
      });

      this.requests.push(model.cid);
    },

    save: function () {
      var data = {
        investment: {
          trades_attributes: []
        }
      };

      _(this.saveQueue).each(function (model) {
        model.unset('created_at');
        model.unset('id');
        model.unset('updated_at');
        model.unset('formated_date');

        data.investment.trades_attributes.push(model.toJSON());
      });

      $.ajax({
        dataType: 'json',
        type: 'POST',
        url: '/investments.json',
        data: data
      }).done($.proxy(function () {
        this.onSaveSuccess({
          cid: 'multiple'
        });
      }, this));
    },

    onSaveSuccess: function (model) {
      this.requests = _(this.requests).without(model.cid);
      if (_.isEmpty(this.requests)) {
        this.afterSave();
      }
    },

    afterSave: function () {
      window.location.reload();
    }

  });

} (Magnetis.Backbone.views));
