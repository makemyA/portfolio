import React, { Component } from 'react';
import './App.scss';
import HomePage from './Components/Vues/HomePage/Home';

class App extends Component {
  render() {
    return (
      <div className="App" style={{display:'flex', flexDirection:'column', height:'100vh', overflowX:'hidden'}}>
        
        <HomePage/>
      
      </div>
    );
  }
}

export default App;
