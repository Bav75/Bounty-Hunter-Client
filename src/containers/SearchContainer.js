import React, { Component } from 'react';
import SearchList from '../components/search/SearchList';

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

export default SearchContainer;