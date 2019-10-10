import React, { Component } from 'react';
import Search from './Search';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class SearchList extends Component {
    render () {
        // console.log("Generated from within searchList")
        // console.log(this.props)

        const searches = this.props.searches.map(
            (search, index) => {
                return (<Search key={index} {...search} markBounty={this.props.markBounty} userId={this.props.userId}/>)
            }
        );

        return (
        <Tabs defaultActiveKey="results">
            <Tab eventKey="results" title="results">
                <ul>
                {searches}
                </ul>
            </Tab>   
        </Tabs>
        );
    };
};

export default SearchList;
