// export const fetchSearches = () => {
//     return {
//         type: "FETCH",
//         searches: []
//     };
// };

import { API_URL } from '../index';

export const fetchSearches = () => {

    return (dispatch) => {
        dispatch({type: 'LOADING'});
        fetch(API_URL).then(response => {return response.json()})
        .then(responseJSON => dispatch({
            type: 'FETCH',
            searches: [...responseJSON.items]
        }));
    };
};
