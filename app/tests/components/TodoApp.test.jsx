var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import {TodoApp} from 'TodoApp';
import TodoList from 'TodoList'

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
    });

    it('should render TodoList', () => {
      var store = configure();
      var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <TodoApp/>
        </Provider>
      );

      var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
      var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

      expect(todoList.length).toEqual(1);
    });
  });
