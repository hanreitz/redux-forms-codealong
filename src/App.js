import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo';
import ShowTodos from './components/todos/ShowTodos';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
        <ShowTodos todoList={this.props.todoList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todoList: state.todos }
}

export default connect(mapStateToProps)(App);
