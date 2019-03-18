import React, { Component } from 'react';
import { connect } from 'react-redux';

import {  } from './stateTree/actions';

import './App.css';

import Users from './components/Users';


class App extends Component {


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Users />
          
        </header>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  users:state.users,
})

export default connect(
  mapStateToProps, 
  {  }
)(App);