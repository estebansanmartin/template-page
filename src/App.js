import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import TodoApp from './components/TodoApp.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="title">Todo App React JS</h2>
        </div>
        <TodoApp />
      </div>
    );
  }
}

export default App;
