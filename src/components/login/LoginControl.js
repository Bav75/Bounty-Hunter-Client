import React, { Component } from 'react';
import LoginInput from './LoginInput';
import { connect } from 'react-redux';


class LoginControl extends Component {

    render() {
        return (
            <div>
                Testing from LoginControl!
                <LoginInput />
            </div>
        )
    }
}

const mapStateToProps = ( {username, password} ) => {
    username,
    password
};

export default connect(mapStateToProps)(LoginControl);