import React, { Component } from 'react';
import {connect} from 'react-redux';
import {asyncData} from './redux/actions/getNewsActions';
import './App.css';
import Main from './Main/Main';
import Loader from 'react-loader-spinner' ;


class App extends Component {

  componentDidMount() {
    this.props.fetch();
  }
  render() {

    let {news} = this.props;


    return (
      <div className="App">
      <header></header>
      {news.length ? <Main/> : <Loader
      type="Plane"
      color='#003FFF'
      height="100"
      width="100"
      />}
      </div>
    );
  }
}
function MSTP(state) {
  return{
    news: state.news,
}
}

const MDTP = dispatch => ({
  fetch: () => dispatch(asyncData())
})

export default connect(MSTP,MDTP)(App);
