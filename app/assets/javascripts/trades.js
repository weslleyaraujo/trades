Module("FrontEnd.TradesController.Index", function(Index) {
  Index.fn.initialize = function(container) {
    this.container = container;
    this.button = $(container).find('[data-js=add-trade-button]');

    this.addEventListeners();
  };

  Index.fn.addEventListeners = function() {
    this.button
      .on('mouseover', this.onButtonMouseOver.bind(this))
      .on('click', this.onButtonClick.bind(this))
    ;
  };

  Index.fn.onButtonMouseOver = function(event) {
    console.log('hova');
  };

  Index.fn.onButtonClick = function(event) {
    alert(this.button.text());
  };
});
