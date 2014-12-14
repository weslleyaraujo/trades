;(function (root, app, helpers) {
  'use strict';

  var defaults = {
    fundsUrl: '',
    tradesUrl: '',
    tradeUrl: '',
    fundsEl: '',
    fundTemplate: '',
    tradesTemplate: '',
    pricesUrl: ''
  };

  function TradesManager (options) {
    this.options = _.extend({}, defaults, options);
    this.prepare();
    this.bind();
    this.start();
  }

  TradesManager.prototype.prepare = function () {
    // set the template for each view
    this.setTemplates();

    // instance collections and views
    this.tradesCollection = new app.collections.Trades({
      tradeUrl: this.options.tradeUrl,
      url: this.options.tradesUrl,
      model: app.models.Trade
    });

    this.fundsCollection = new app.collections.Funds({
      pricesUrl: this.options.pricesUrl,
      url: this.options.fundsUrl,
      model: app.models.Fund,
    });

    this.fundsView = new app.views.Funds({
      collection: this.fundsCollection,
      el: this.options.fundsEl,
      trades: this.tradesCollection
    });
  };

  TradesManager.prototype.setTemplates = function () {
    app.views.Fund.prototype.template = helpers.template(this.options.fundTemplate);
    app.views.Trades.prototype.template = helpers.template(this.options.tradesTemplate);
    app.views.Trade.prototype.template = helpers.template(this.options.tradeTemplate);
  };

  TradesManager.prototype.bind = function () {
    this.fundsCollection.on('sync', this.onSync, this);
  };

  TradesManager.prototype.start = function () {
    this.fundsCollection.fetch();
  };

  TradesManager.prototype.onSync = function () {
    // fetch trades after funds are ready
    this.tradesCollection.fetch();
  };

  root.TradesManager = TradesManager;

} (Magnetis, Magnetis.Backbone, Magnetis.helpers));
