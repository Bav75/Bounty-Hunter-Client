import React, { Component } from 'react';
import LoginInput from './LoginInput';
import { connect } from 'react-redux';
import { addUser } from '../../actions/addUser';


class LoginControl extends Component {

    render() {
        return (
            <div>
                Testing from LoginControl!
                <LoginInput addUser={this.props.addUser}/>
            </div>
        )
    }
}

// const mapStateToProps = ( {username, password} ) => {
//     username,
//     password
// };

export default connect(null, { addUser })(LoginControl);