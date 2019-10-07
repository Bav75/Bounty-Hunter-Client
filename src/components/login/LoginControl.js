import React, { Component } from 'react';
import LoginInput from './LoginInput';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/loginUser';
import { createUser } from '../../actions/createUser';


class LoginControl extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                Testing from LoginControl!
                <LoginInput loginUser={this.props.loginUser} createUser={this.props.createUser}/>
            </div>
        )
    }
}

const mapStateToProps = ( { user } ) => ({
    user
});

export default connect(mapStateToProps, { loginUser, createUser })(LoginControl);