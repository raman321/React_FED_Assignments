import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    counter: 0
  }
  switchNameHandler = () => {
    this.setState({ counter: (this.state.counter) + 1 })
  }
  swtchNameHandler = () => {
    this.setState({ counter: (this.state.counter) - 1 })
  }


  render() {
    return (
      <div className="App">
        <h1 style={{ fontWeight: 27 }}>Counter Demo</h1>
        <h2 style={{ fontWeight: 38 }}>Counter:<span>   </span>{this.state.counter}</h2>
        <button onClick={this.switchNameHandler}>Increment Counter</button>
        <button onClick={this.swtchNameHandler}>Decrement Counter</button>
      </div>
    );
  }
}

export default App;
