import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import UserScreen from './components/user/UserScreen';
// import { connect } from 'react-redux';

function App() {


  return (
    <div className="App">
      <Route exact path ='/' component={LoginContainer}/>
      {/* <Route exact path ='/' component={Home}/> */}
      <Route exact path ='/:user_id' component={UserScreen}/>
    </div>
  );
};



export default App;
