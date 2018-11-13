import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lander from './components/Lander';
import MainMenu from './components/MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lander />
        <MainMenu />
      </div>
    );
  }
}

export default App;
