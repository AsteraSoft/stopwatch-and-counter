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

  toggleTodo = (todo) => {
    this.setState({
      todos: this.state.todos.map((x, i) => {
        if (x === todo) {
          x.toggle();
        }

        return x;
      })
    })
  }

  removeTodo = (todo) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(() => {
        this.setState({
          todos: this.state.todos.filter(x => x !== todo)
        });
      });
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
                  <button onClick={() => this.toggleTodo(x)} className="btn btn-sm btn-info">done</button>
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
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Text</th>
                    <th>Is Done?</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.todos.map((todo, i) => (
                    <tr key={i}>
                      <td>{i}</td>
                      <td>{todo.text}</td>
                      <td>{todo.done ? 'Yes' : 'No'}</td>
                      <td>
                        <button onClick={() => this.toggleTodo(todo)}
                         className="btn btn-info">
                          Toggle
                        </button>
                        <button onClick={() => this.removeTodo(todo)}
                         className="btn btn-danger">
                          Remove
                        </button>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
