/* Using Backbone as an Event Aggregator */

Module("FrontEnd.TradesController.Index", function(Index) {
  Index.fn.initialize = function(container) {
    this.container = container;

    // Initialize Title
    Module.run(
        "FrontEnd.TradesController.Index.Title"
      , this.container.find('[data-js=trades-title]')
    );

    // Initialize Button
    Module.run(
        "FrontEnd.TradesController.Index.Button"
      , this.container.find('[data-js=add-trade-button]')
    );

    // this.mediator = new Mediator();
  };
});

Module("FrontEnd.TradesController.Index.Title", function(Title) {
  Title.fn.initialize = function(container) {
    this.container = container;

    this.subs();
  };

  Title.fn.subs = function() {
    Backbone.on('clickButton', this.onButtonClick, this);
  };

  Title.fn.onButtonClick = function(display) {
    // alert(this.container.text());
    alert(display.name);
  };
});

Module("FrontEnd.TradesController.Index.Button", function(Button) {
  Button.fn.initialize = function(container) {
    this.container = container;

    this.pubs();
  };

  Button.fn.pubs = function() {
    this.container.on('click', function() { Backbone.trigger('clickButton', { name: 'It works!' }); });
  };
});








