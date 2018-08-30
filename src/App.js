import React, { Component } from 'react';
import './App.css';

class Todo {
  constructor(text) {
    this.text = text;
    this.done = false;
  }

  toggle() {
    this.done = !this.done;
  }
}

class App extends Component {

  state = {
    newTodoText: 'New Todo',
    todos: []
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, new Todo(this.state.newTodoText)]
    })
  }

  toggleTodo = (index) => {
    this.setState({
      todos: this.state.todos.map((x, i) => {
        if (i === index) {
          x.toggle();
        }

        return x;
      })
    })
  }

  render() {
    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-8">
            <input value={this.state.newTodoText}
              onChange={e => this.setState({ newTodoText: e.target.value })}
              type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <button
              onClick={this.addTodo}
              className="btn btn-success btn-block">Add</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1>Todo:</h1>
          </div>
          <div className="col-md-12 card-body">
            {this.state.todos
              .filter(x => !x.done)
              .map((x, i) => (
                <div key={i}>{x.text}
                  <button onClick={() => this.toggleTodo(i)} className="btn btn-sm btn-info">done</button>
                </div>)).reverse()
            }
          </div>

          <div className="col-md-12">
            <h1>Done:</h1>
          </div>
          <div className="col-md-12 card-body">
            {this.state.todos
              .filter(x => x.done)
              .map((x, i) => <div key={i}>{x.text}</div>).reverse()
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
