Module("FrontEnd.TradesController.Index", function(Index) {
  Index.fn.initialize = function(container) {
    this.container = container;
    this.button = $(container).find('.add-trade-button');

    this.addEventListeners();
  };

  Index.fn.addEventListeners = function() {
    this.button
      .on('click', this.onButtonClick.bind(this))
    ;
  };

  Index.fn.onButtonClick = function(event) {
    alert(this.button.text());
  };
});
