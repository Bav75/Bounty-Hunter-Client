import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    
   
    render() {
        if (this.state.loggedIn === true) {
            return (
                <Redirect to="/user" />
            );
        } else {
            return (
                // <LoginContainer logIn={this.logIn}/>
                <Redirect to="/login"/>
            );
        };
    };
};

const mapStateToProps = ({ session }) => ({
    session
});

export default connect(mapStateToProps)(Home);



 // handling log in state locally for now rather than in redux store 

    // add log in state & method to redux store
    // state = {
    //     loggedIn: false
    // };

    // // add as action to store 
    // logIn = () => {
    //     this.setState({
    //         loggedIn: true
    //     });
    // };