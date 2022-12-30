import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <h2>Counter-{this.props.id}</h2>
        <h3>{this.props.count}</h3>
        <div className="btns">
          <button className="increment" onClick={this.props.increment}>
            Increase
          </button>
          <button className="decrement" onClick={this.props.decrement}>
            Decrease
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
