// export const fetchSearches = () => {
//     return {
//         type: "FETCH",
//         searches: []
//     };
// };

export const fetchSearches = () => {
    const API_URL = 'https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow';

    return (dispatch) => {
        dispatch({type: 'LOADING'});
        fetch(API_URL).then(response => {return response.json()})
        .then(responseJSON => dispatch({
            type: 'FETCH',
            searches: [...responseJSON.items]
        }));
    };
};
