import React, { Component } from 'react';
import LoginControl from './login/LoginControl';
import UserScreen from './user/UserScreen';

export default class Home extends Component {
    
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
                <UserScreen />
            );
        } else {
            return (
                <LoginControl logIn={this.logIn}/>
            );
        };
    };
};