import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginControl from './components/login/LoginControl';
import Home from './components/Home';
import { Redirect, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      {/* <p>Testing from App!</p> */}
      {/* <LoginControl /> */}
      <Route exact path ='/login' component={LoginControl}/>
      <Route exact path ='/' component={Home}/>
    </div>
  );
};

export default App;
