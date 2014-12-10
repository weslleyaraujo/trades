/*
 * @class Funds
 *
 * View for each fund
 * */
;(function (root, template) {
  'use strict';
  
  root.Fund = Backbone.View.extend({
    className: 'magnetis-fund',

    initialize: function (options) {
      this.template = options.template;
      this.render();
    },

    render: function () {
              console.log(this.model.toJSON());
      this.$el.html(this.template(this.model.toJSON()));
    }

  })

} (Magnetis.Backbone.views, Magnetis.helpers.template));
