import React, { Component } from 'react';
import LoginInput from '../components/login/LoginInput';
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginUser';
import { createUser } from '../actions/createUser';
import { sessionLogin } from '../actions/sessionLogin';
import { Redirect } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'

class LoginControl extends Component {

    renderRedirect = () => {
        if (this.props.session) {
            return (<Redirect to={"/" + this.props.user.id} />)
        };
    };

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Jumbotron fluid ="jumbo">
                    <h1 className="header-text">Bounty Hunter</h1>
                    <h2 className="sub-header-text">A simple management tool for Stack Overflow bounties.</h2>
                    <LoginInput sessionLogin={this.props.sessionLogin} loginUser={this.props.loginUser} createUser={this.props.createUser}/>
                </Jumbotron>
            </div>
        );
    };
};

const mapStateToProps = ({ user, session }) => ({
    user,
    session
});

export default connect(mapStateToProps, { loginUser, createUser, sessionLogin })(LoginControl);







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