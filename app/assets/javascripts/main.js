;(function (root, app, helpers) {
  'use strict';

  var defaults = {
    fundsUrl: '',
    tradesUrl: '',
    fundsEl: '',
    fundTemplate: ''
  };

  function TradesManager (options) {
    this.options = _.extend({}, defaults, options);
    this.prepare();
    this.bind();
    this.start();
  };

  TradesManager.prototype.prepare = function () {
    this.tradesCollection = new app.collections.Trades({
      url: this.options.tradesUrl,
      model: app.models.Trade
    });

    this.fundsCollection = new app.collections.Funds({
      url: this.options.fundsUrl,
      model: app.models.Fund,
    });

    this.fundsView = new app.views.Funds({
      collection: this.fundsCollection,
      el: this.options.fundsEl,
      trades: this.tradesCollection,
      itemTemplate: helpers.template(this.options.fundTemplate),
      item: app.views.Fund
    });
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
