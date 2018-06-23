import React, { Component } from 'react';
// import Header from "./components/Header"
// import NewMusician from "./components/NewMusician"
// import NewRequest from './components/NewRequest';
import MusicianListContainer from "./containers/MusicianListContainer";
import { Row } from "react-bootstrap";
import './App.css';

const rowMarginBottom = {
  marginBottom: '20px'
}

// const NewMusicianMargins = {
//   marginTop: '80px',
//   marginLeft: "20px",
//   borderStyle: 
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Row style={rowMarginBottom}><Header /></Row>
        
        <Row style={NewMusicianMargins}><NewMusician /></Row>
        <NewRequest /> */}
        <Row><MusicianListContainer /></Row>
      </div>
    );
  }
}

export default App;
