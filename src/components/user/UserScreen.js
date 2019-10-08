import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class UserScreen extends Component {

    state = {
        id: null
    };

    componentDidMount() {
        let id = this.props.match.params.user_id;
        this.setState({
            id: id
        });
    };

    render() {
        if (this.props.session) { 
            return (
                <div>
                    <h1>Welcome to Bounty Hunter, {this.props.user.username}</h1>
                    <h2>User id: {this.state.id}</h2>
                </div>
            );
        } else {
            return (<Redirect to="/" />);
        };
    };
};

const mapStateToProps = ( { user, session } ) => ({
    user,
    session
});

export default connect(mapStateToProps)(UserScreen);
