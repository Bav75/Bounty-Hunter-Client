import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginControl from './login/LoginControl';

class Home extends Component {
    
    state = {
        loggedIn: false
    };

    logIn = () => {
        this.setState({
            loggedIn: true
        });
    };

    render() {
        console.log(this.props)
        console.log(this.state)
        // if (Object.entries(this.props.user).length !== 0) {
        if (this.state.loggedIn === true) {
            const username = this.props.user.username;
            const id = this.props.user.id;
            return (
                <div>
                    <h1>Welcome, {username}!</h1>
                    <h2>UserID, {id}</h2>
                </div>
            );
        } else {
            return (
                // <div>
                //     <LoginControl />
                // </div>
                // <Redirect to='/login'/>
                <LoginControl logIn={this.logIn}/>
            );
        };
    };
};

const mapStateToProps = ( { user } ) => ({
    user
});


export default connect(mapStateToProps)(Home);