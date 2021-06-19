import React, { Component } from 'react'
import NavBar from './components/navBar';
import './App.css';
import Counters from './components/counters';



class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },

    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });

  };
  handleDecerement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value === 0 ? counters[index].value = 0 : counters[index].value--;
    this.setState({ counters });

  };

  handleReset = () => {
    this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ Counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container-sm d-flex justify-content-center my-3">
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDecerement={this.handleDecerement} onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
