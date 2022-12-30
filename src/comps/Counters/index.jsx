import React, { Component } from "react";

import Counter from "../Counter";
import "./Counters.css";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, count: 0 },
      { id: 2, count: 0 },
      { id: 3, count: 0 },
    ],
  };

  increment = (id) => {
    this.setState((prev) => ({
      counters: prev.counters.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      }),
    }));
  };

  decrement = (id) => {
    this.setState((prev) => ({
      counters: prev.counters.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count > 0 ? item.count - 1 : item.count,
          };
        } else return item;
      }),
    }));
  };

  render() {
    const total = this.state.counters.reduce((prev, next) => {
      return prev + next.count;
    }, 0);
    console.log(total);
    return (
      <main>
        <div className="counters">
          {this.state.counters.map((item) => (
            <>
              <Counter
                count={item.count}
                id={item.id}
                key={item.id}
                increment={() => this.increment(item.id)}
                decrement={() => this.decrement(item.id)}
              />
            </>
          ))}
        </div>
        <h2>Total of counters is: {total}</h2>
      </main>
    );
  }
}

export default Counters;
