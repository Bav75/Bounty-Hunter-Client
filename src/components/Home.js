import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    render() {

    }
};

const mapStateToProps = ( { user } ) => ({
    user
});


export default connect(mapStateToProps)(Home);