import React from 'react';
import { Link } from 'react-router-dom';
const Search = (props) => {
    return (
    <li onClick={() => {window.open(props.link, '_blank')}}>{props.title}</li>
    );
};

export default Search;
