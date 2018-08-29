import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    time: 0
  }

  start() {
    this.handle = setInterval(() => {
      this.setState({
        time: this.state.time + 10
      })
    }, 10);
  }

  pause() {
    clearInterval(this.handle);
  }

  formatTime(number) {
    const hours = Math.floor(number / 1000 / 60 / 60);
    const minutes = Math.floor(number / 1000 / 60) % (3600);
    const seconds = Math.floor(number / 1000) % 60;
    const milliSeconds = number % 1000;

    return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}.${('00' + milliSeconds).slice(-3)}`;
  }

  reset() {
    this.pause();
    this.setState({ time: 0 });
  }

  componentDidUpdate() {
    console.log('After Updating');
  }

  componentDidMount() {
    console.log('After Mounting');
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  render() {
    return (<div>
      <h1>{this.formatTime(this.state.time)}</h1>
      <div>
        <button onClick={this.start.bind(this)} className="btn btn-success">
          Start
        </button>
        <button onClick={this.pause.bind(this)} className="btn btn-warning">
          Stop
        </button>
        <button onClick={this.reset.bind(this)} className="btn btn-danger">
          Reset
        </button>
      </div>
    </div>)

    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <h1>{this.formatTime(this.state.time)}</h1>
              </div>
              <div className="col-md-12">
                <div className="btn-group">
                  <button onClick={this.start.bind(this)} className="btn btn-success">
                    Start
                  </button>
                  <button onClick={this.pause.bind(this)} className="btn btn-warning">
                    Stop
                  </button>
                  <button onClick={this.reset.bind(this)} className="btn btn-danger">
                    Reset
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
