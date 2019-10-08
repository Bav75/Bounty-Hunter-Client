import React, { Component } from 'react';
import SearchList from '../components/search/SearchList';
import { connect } from 'react-redux';
import fetchSearches from '../actions/fetchSearches';

class SearchContainer extends Component {

    render() {
        return (
            <div className="SearchContainer">
                <SearchList />
            </div>
        );
    };
};

const mapStateToProps = ( { searches } ) => ({
    searches
});

export default connect(mapStateToProps, { fetchSearches })(SearchContainer);