import React, { Component } from 'react';
import {plus, minus, reset} from './redux/action/counterAction'; 
import {connect} from 'react-redux'; //метод, присоеденяят к глобальному стор
import './App.css';
import Form from "./Form/Form";

class App extends Component {
  render() {
    // console.log(this.props);
    let {value, add, reload, substr} = this.props;
    
    return (
      
      <div className="container">

       <p className="text">{value}</p>
       <button onClick={substr}>-1</button>
       <button onClick={reload}>reset</button>
       <button onClick={add}>+1</button>

       <Form/>
      </div>
    );
  }
}
// Результат объект.   Весь глобальный объект получает.
function mapStateToProps (state){
  return {
    value:state.counter,   // value название пропса, называем как хочем.
    // мы наполняем пустой объект пропс(объект)
    input: state.input,

  }
}

//dispatch метод который запускает екшн. Результат функция.
function mapDispathToProps (dispatch){
  return{
    add: function () {
      dispatch (plus(5))

    },
    substr: function(){
      dispatch (minus(3))
    },
    relsad: function(){
      dispatch (reset())
    },
  }
}
export default connect (mapStateToProps,mapDispathToProps) (App);
