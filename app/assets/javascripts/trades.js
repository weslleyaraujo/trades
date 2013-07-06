Module("FrontEnd.TradesController.Index", function(Index) {
  Index.fn.initialize = function(container) {
    _.extend(this, Backbone.Events);
    this.container = container;
    this.button = $(container).find('[data-js=add-trade-button]');
    this.title = $(container).find('[data-js=trades-title]');

    this.addPub();
    this.addSub();
  };

  Index.fn.addSub = function() {
    this
      .on('clickButton', this.onButtonClick, this)
    ;
  };

  Index.fn.addPub = function() {
    this.button
      .on('click', function() { this.trigger('clickButton') }.bind(this) )
    ;
  };

  Index.fn.onButtonMouseOver = function(event) {
    console.log('hova');
    this.title.css('color', 'black');
  };

  Index.fn.onButtonClick = function(event) {
    alert(this.button.text());
    // this.title.css('color', 'red');
  };
});
