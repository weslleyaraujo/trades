;(function (root, app) {
  'use strict';

  var defaults = {
    fundsUrl: '',
    tradesUrl: ''
  };

  function TradesManager (options) {
    this.options = _.extend({}, defaults, options);
    this.prepare();
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
  };

  TradesManager.prototype.start = function () {
    this.fundsCollection.fetch();
  };

  root.TradesManager = TradesManager;

} (Magnetis, Magnetis.Backbone))
