import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchContainer from '../../containers/SearchContainer';
import BountyContainer from '../../containers/BountyContainer';
import Jumbotron from 'react-bootstrap/Jumbotron'

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
        let jumbotronStyle = {
            background: '#cc33ff'
        }
        if (this.props.session) { 
            return ( 
                <div className="UserScreen">
                    <Jumbotron fluid id="userScreenJumbo" className="jumbo">
                        <h1 className="sub-header-text">Welcome to Bounty Hunter, {this.props.user.username}</h1>
                    </Jumbotron>
                    <h2 className="sub-header-text">Today's open bounties</h2>
                    <SearchContainer />
                    <h2 className="sub-header-text">Bounties currently tracked</h2>
                    <BountyContainer />
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

