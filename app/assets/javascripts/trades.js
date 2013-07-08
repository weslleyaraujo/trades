/* Using Mediator.js */

// Page
Module("FrontEnd.TradesController.Index", function(Index) {
  Index.fn.initialize = function(container) {
    this.container = container;

    Module('FrontEnd.AppMediator', new Mediator());

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
  };
});

// Title
Module("FrontEnd.TradesController.Index.Title", function(Title) {
  Title.fn.initialize = function(container) {
    this.container = container;

    this.subs();
  };

  Title.fn.subs = function() {
    FrontEnd.AppMediator.subscribe('clickButton', $.proxy(this.onButtonClick, this));
  };

  Title.fn.onButtonClick = function(display) {
    var text = (display.hasOwnProperty('name')) ? display.name : '';
    console.log(text);
    return 'done';
  };
});

// Button
Module("FrontEnd.TradesController.Index.Button", function(Button) {
  Button.fn.initialize = function(container) {
    this.container = container;

    this.pubs();
  };

  Button.fn.pubs = function() {
    this.container.on('click', function() {
      FrontEnd.AppMediator.publish('clickButton', { name: 'It works!' });
    });
  };
});








