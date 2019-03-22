import React, { Component } from 'react';
// import {enter} from './redux/action/enterAction'; 
import './App.css';
import Form from "./redux/Form/Form";

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      
      <div className="container">
       {/* <button onClick>START</button> */}
     

       <Form/>
      </div>
    );
  }
}

export default App;
