// export const createUser = user => {
//     return {
//       type: 'CREATE_USER',
//       user
//     };
//   };

// https://bount-hunter-api.herokuapp.com/

// const BASE_URL = 'http://localhost:3002';
// const BASE_URL = 'https://bount-hunter-api.herokuapp.com/';

import { BASE_URL } from '../index';


export const createUser = (user, sessionLogin) => {

  const USERS_URL = BASE_URL + "users";


  const configObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        user
    })
  };
  return (dispatch) => {
    dispatch({ type: 'CHECKING_USER'})
    fetch(USERS_URL, configObject).then(response => {return response.json()})
    .then(responseJSON => {
      if (responseJSON.hasOwnProperty("status")) {
        console.log(`Status: ${responseJSON.status}`);
        console.log(`Errors detected: ${responseJSON.errors}`);
      } else {
        // if user created successfully, dispatch create and login actions
        dispatch({
          type: "CREATE_USER",
          user: {
            username: responseJSON.data.attributes.username,
            password: responseJSON.data.attributes.password,
            id: responseJSON.data.attributes.id
          }
        });
        dispatch(sessionLogin);
      };
  });
  };
};
