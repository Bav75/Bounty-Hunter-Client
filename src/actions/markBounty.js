// const BASE_URL = 'http://localhost:3002';
// const BASE_URL = 'https://bount-hunter-api.herokuapp.com/';

import { BASE_URL } from '../index';

export const markBounty = (search) => {

    const BOUNTY_URL = BASE_URL + "bounties";
    
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            search
        })
      };

    return (dispatch) => {
        dispatch({type: 'LOADING_BOUNTIES'});
        fetch(BOUNTY_URL, configObject).then(response => {return response.json()})
        .then(responseJSON => {
            if (responseJSON.hasOwnProperty("status")) {
                console.log(`Status: ${responseJSON.status}`);
                console.log(`Errors detected: ${responseJSON.errors}`);
                dispatch({
                    type: "RE_RENDER"
                });
              } else {
                  dispatch({
                      type: 'MARK_BOUNTY',
                      bounty: {...responseJSON.data.attributes}
                  });
                };
            });
        };
};