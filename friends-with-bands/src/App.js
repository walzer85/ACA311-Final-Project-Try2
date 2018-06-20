import React, { Component } from 'react';
import Header from "./components/Header"
import NewMusician from "./components/NewMusician"
import NewRequest from './components/NewRequest';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewMusician />
        <NewRequest />
      </div>
    );
  }
}

export default App;
