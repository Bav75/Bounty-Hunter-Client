// export const createUser = user => {
//     return {
//       type: 'CREATE_USER',
//       user
//     };
//   };

const BASE_URL = 'http://localhost:3002';
const USERS_URL = `${BASE_URL}/users`;

export const createUser = (user) => {

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
        dispatch({
          type: "CREATE_USER",
          user: {
            username: responseJSON.data.attributes.username,
            password: responseJSON.data.attributes.password,
            id: responseJSON.data.attributes.id
          }
        });
      };
  });
  };
};
