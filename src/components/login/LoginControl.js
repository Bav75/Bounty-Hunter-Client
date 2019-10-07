import React, { Component } from 'react';
import LoginInput from './LoginInput';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/loginUser';


class LoginControl extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                Testing from LoginControl!
                <LoginInput loginUser={this.props.loginUser}/>
            </div>
        )
    }
}

const mapStateToProps = ( { user } ) => ({
    user
});

export default connect(mapStateToProps, { loginUser })(LoginControl);