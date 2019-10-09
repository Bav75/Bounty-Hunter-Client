import React from 'react';
import { Link } from 'react-router-dom';
const Search = (props) => {
    return (
    <li> <a onClick={() => {window.open(props.link, '_blank')}}>{props.title}</a> <button onClick={() => {props.markBounty(props)}}>Mark Bounty</button></li>
    );
};

export default Search;

// onClick={() => {window.open(props.link, '_blank')}}