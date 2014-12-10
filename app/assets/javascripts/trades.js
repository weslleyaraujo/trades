/*
 * Main file for global configs
 *
 * This file will be the first import after vendor,
 * all config values must be here
 * */
window.Trades = {};

Trades.Backbone = {
  models: {},
  views: {},
  collections: {}
};

Trades.helpers = {};

/*
 * Helper for underscore template
 *
 * @method template
 * @return {Function} Returns the template function
 * */
Trades.helpers.template = function (selector) {
  var content = $(selector).html();
  return _.template(content ? content : "");
};
