var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
    });

    it('should call onAddTodo if valid input entered', () => {
  var spy = expect.createSpy();
  var addtodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
  var $el = $(ReactDOM.findDOMNode(addtodoForm));

  addtodoForm.refs.todotext.value = 'do something';
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toHaveBeenCalledWith('do something');
});

it('should not call onAddTodo if no text is entered', () => {
  var spy = expect.createSpy();
  var addtodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
  var $el = $(ReactDOM.findDOMNode(addtodoForm));

  addtodoForm.refs.todotext.value = '';
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toNotHaveBeenCalled();
});
  });
