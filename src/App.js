import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginControl from './components/login/LoginControl';
import { Redirect, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      {/* <p>Testing from App!</p> */}
      {/* <LoginControl /> */}
      <Route exact path ='/' component={LoginControl}/>
      <Route exact path ='/test' render={() => <h1>Test Routing!</h1>}/>
    </div>
  );
};

export default App;
