import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginControl from './components/login/LoginControl';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <p>Testing from App!</p> */}
        {/* <LoginControl /> */}
        <Route exact path ='/' component={LoginControl}/>
      </div>
    </Router>
  );
};

export default App;
