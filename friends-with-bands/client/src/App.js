import React, { Component } from 'react';
import Header from "./components/Header"
import NewMusicianContainer from "./containers/NewMusiciantainer"
import NewRequestContainer from './components/NewRequestContainer';
import MusicianListContainer from "./containers/MusicianListContainer";
import RequestListContainer from "./containers/RequestListContainer";
import './App.css';
import {
  Route,
  Switch
} from "react-router-dom";


class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Switch>
            <Route path='/musicians' render={ (props) => {
              return (
                <div>
                  <MusicianListContainer />
                  <NewMusicianContainer />
                </div>
              );
            }} />
            <Route path='/requests' render={ (props) => {
              return (
                <div>
                  <RequestListContainer />
                  <NewRequestContainer />
                </div>
              );
            }} />
          </Switch>
        </div>
    );
  }
}

export default App;
