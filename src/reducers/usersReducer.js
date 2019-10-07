export default function usersReducer(
    state = {}, action 
) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...action.user};
        case 'CREATE_USER':
            return {...action.user};
        default:
            return state;
    };
};