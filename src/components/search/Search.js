import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'

const Search = (props) => {


    return (
    <ListGroup.Item>
        <button className="link-styling" onClick={() => {window.open(props.link, '_blank')}}>{props.title}</button> 
        <button className="small-button-styling" onClick={() => {props.markBounty(props)}}>Mark Bounty</button>
    </ListGroup.Item>
    );
};

export default Search;

// onClick={() => {window.open(props.link, '_blank')}}