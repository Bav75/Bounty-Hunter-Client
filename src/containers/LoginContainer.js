import React, { Component } from 'react';
import LoginInput from './LoginInput';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/loginUser';
import { createUser } from '../../actions/createUser';
import { sessionLogin } from '../../actions/sessionLogin';
// import { Redirect } from 'react-router-dom';
// import { logIn } from '../Home';

class LoginControl extends Component {
    render() {
        return (
            <div>
                Testing from LoginControl!
                <LoginInput sessionLogin={this.props.sessionLogin} loginUser={this.props.loginUser} createUser={this.props.createUser}/>
            </div>
        );
    };
};
export default connect(null, { loginUser, createUser, sessionLogin })(LoginControl);


    // state = {
    //     redirect: false 
    // };

    // setRedirect = () => {
    //     this.setState({
    //       redirect: true
    //     })
    //   }

    // renderRedirect = () => {
    // if (this.state.redirect) {
    //     return <Redirect to='/test' />
    //     }
    // }

    // console.log(this.props)

        

        // switch statement to handle whether or not user is logged in 
        // by checking if users object empty
        // if (Object.entries(this.props.user).length > 0) {
        //     const username = this.props.user.username;
        //     return (
        //         <div>
        //             <h1>Welcome, {username}!</h1>
        //         </div>
        //     );
        // } else {

          {/* {this.renderRedirect()} */}
                    {/* <button onClick={this.setRedirect}></button> */}