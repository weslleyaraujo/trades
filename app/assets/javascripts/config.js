/*
 * Main file for global configs
 *
 * This file will be the first import after vendor,
 * all config values must be here
 * */

// setting underscore delimiters
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

window.Magnetis = {};

Magnetis.Backbone = {
  models: {},
  views: {},
  collections: {}
};

Magnetis.helpers = {};

/*
 * Helper for underscore template
 *
 * @method template
 * @return {Function} Returns the template function
 * */
Magnetis.helpers.template = function (selector) {
  var content = $(selector).html();
  return _.template(content ? content : "");
};
