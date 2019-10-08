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
        // if (Object.entries(this.props.user).length !== 0) {
        if (this.state.loggedIn === true) {
            const username = this.props.user.username;
            return (
                <div>
                    <h1>Welcome, {username}!</h1>
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