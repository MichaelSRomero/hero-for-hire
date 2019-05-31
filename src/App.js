import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroContainer from './components/HeroContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="container">
          <HeroContainer />
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
