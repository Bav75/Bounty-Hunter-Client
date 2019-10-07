import React, { Component } from 'react';
import LoginInput from './LoginInput';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/loginUser';
import { createUser } from '../../actions/createUser';


class LoginControl extends Component {

    render() {
        // console.log(this.props)

        // switch statement to handle whether or not user is logged in 
        // by checking if users object empty
        if (Object.entries(this.props.user).length > 0) {
            const username = this.props.user.username;
            return (
                <div>
                    <h1>Welcome, {username}!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    Testing from LoginControl!
                    <LoginInput loginUser={this.props.loginUser} createUser={this.props.createUser}/>
                </div>
            );
        };
    };
};

const mapStateToProps = ( { user } ) => ({
    user
});

export default connect(mapStateToProps, { loginUser, createUser })(LoginControl);