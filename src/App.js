import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  componentDidUpdate() {
    console.log('After Updating');
  }

  componentDidMount() {
    console.log('After Mounting');
  }

  shouldComponentUpdate(newProps, newState) {
    return newState.count % 3 === 0;;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <h1>Count: {this.state.count}</h1>
              </div>
              <div className="col-md-12">
                <div className="btn-group">
                  <button onClick={this.increment} className="btn btn-success">
                    Increment
                  </button>
                  <button onClick={this.decrement} className="btn btn-danger">
                    Decrement
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default App;
