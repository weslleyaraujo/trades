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

/*
 * Helper for format date to 00/00/000
 *
 * @method toBrDate
 * @return {String} The formated date
 * */
Magnetis.helpers.toBrDate = function (date) {
  return date.split('-').reverse().join('/');
};

/*
 * Helper for format date to 0000-00-00
 *
 * @method toUsDate
 * @return {String} The formated date
 * */
Magnetis.helpers.toUsDate = function (date) {
  return date.split('/').reverse().join('-');
};
