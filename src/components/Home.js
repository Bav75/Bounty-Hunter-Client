import React, { Component } from 'react';
import LoginControl from './login/LoginControl';
// import UserScreen from './user/UserScreen';
import { Redirect } from 'react-router-dom';

export default class Home extends Component {
    
    // handling log in state locally for now rather than in redux store 

    // add log in state & method to redux store
    state = {
        loggedIn: false
    };

    logIn = () => {
        this.setState({
            loggedIn: true
        });
    };

    render() {
        if (this.state.loggedIn === true) {
            return (
                <Redirect to="/user" />
            );
        } else {
            return (
                <LoginControl logIn={this.logIn}/>
            );
        };
    };
};