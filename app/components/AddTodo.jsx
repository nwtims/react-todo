var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todotext.value;

    if (todoText.length > 0) {
      this.refs.todotext.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todotext.focus();
    }
  },

  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit} className="addTodo-form">
          <input type="text" ref="todotext" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
