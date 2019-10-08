import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserScreen extends Component {
    render() {
        return (
            <h1>Welcome to Bounty Hunter, {this.props.user.username}</h1>
        );
    };
};

const mapStateToProps = ( { user } ) => ({
    user
});

export default connect(mapStateToProps)(UserScreen);
