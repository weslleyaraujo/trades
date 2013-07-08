//= require spec_helper
//= require mediator
//= require trades

describe('FrontEnd.TradesController.Index.Title', function() {
  var title
    , container
    , mediator
  ;

  beforeEach(function() {
    container = $('<div/>', { 'data-js': 'add-trade-button' });
  })

  describe('#onButtonClick()', function() {
    beforeEach(function() {
      mediator = Module('FrontEnd.AppMediator', new Mediator());
      title = Module.run("FrontEnd.TradesController.Index.Title", container);
    })

    it('should emit alert', function() {
      expect(title.onButtonClick('mocha test')).to.equal('done');
    })
  })

  describe('#subs()', function() {
    beforeEach(function() {
      mediator = Module('FrontEnd.AppMediator', new Mediator());
      sinon.spy(mediator, 'subscribe');
      title = Module.run("FrontEnd.TradesController.Index.Title", container);
    })

    afterEach(function() {
      mediator.subscribe.restore();
    })

    it('should subscribe to clickButton', function() {
      expect(mediator.subscribe.calledWith('clickButton')).to.be.ok;
    })
  })

  // describe('callbacks', function() {
  //   beforeEach(function() {
  //     mediator = Module('FrontEnd.AppMediator', new Mediator());
  //     title = Module.run("FrontEnd.TradesController.Index.Title", container);
  //     sinon.spy(title, 'onButtonClick');
  //   })

  //   afterEach(function() {
  //     title.onButtonClick.restore();
  //   })

  //   it('should trigger onButtonClick', function() {
  //     console.log(mediator);
  //     mediator.publish('clickButton', 'hello');
  //     expect(title.onButtonClick.calledWith('hello')).to.be.ok;
  //   })
  // })
})