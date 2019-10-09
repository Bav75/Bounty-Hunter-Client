import React, { Component } from 'react';
import Search from './Search';

class SearchList extends Component {
    render () {
        // console.log("Generated from within searchList")
        // console.log(this.props)

        const searches = this.props.searches.map(
            (search, index) => {
                return (<Search key={index} {...search} markBounty={this.props.markBounty}/>)
            }
        );

        return (
        <ul>
            {searches}
        </ul>
        );
    };
};

export default SearchList;
