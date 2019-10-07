import React, { Component } from 'react';
import LoginInput from './LoginInput';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/loginUser';


class LoginControl extends Component {

    render() {
        return (
            <div>
                Testing from LoginControl!
                <LoginInput loginUser={this.props.loginUser}/>
            </div>
        )
    }
}

// const mapStateToProps = ( {username, password} ) => {
//     username,
//     password
// };

export default connect(null, { loginUser })(LoginControl);