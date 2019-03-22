import React, { Component } from 'react';
import './App.css';
import Gallery from './redux/Gallery/Gallery'

class App extends Component {
  render() {
    // console.log(this.props);
    
    return (
      
      <div className="container">
     <Gallery/>
      </div>
    );
  }
}

export default App;

