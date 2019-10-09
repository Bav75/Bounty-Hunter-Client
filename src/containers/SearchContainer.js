import React, { Component } from 'react';
import SearchList from '../components/search/SearchList';
import { connect } from 'react-redux';
import { fetchSearches } from '../actions/fetchSearches';
import { markBounty } from '../actions/markBounty';

class SearchContainer extends Component {

    componentDidMount() {
        this.props.fetchSearches();
    };

    renderSearchList = () => {
        if (this.props.searches.loading) {
            return (
                <p>Loading...</p>
            );
        } else {
            return (
                <SearchList searches={this.props.searches.content} markBounty={this.props.markBounty} userId={this.props.user.id}/>
            );
        };
    };

    render() {
        return (
            <div className="SearchContainer">
                {this.renderSearchList()}
            </div>
        );
    };
};

const mapStateToProps = ( { user, searches } ) => ({
    user,
    searches
});

export default connect(mapStateToProps, { fetchSearches, markBounty })(SearchContainer);