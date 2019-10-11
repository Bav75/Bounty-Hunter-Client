export default function usersReducer(
    state = false, action 
) {
    switch (action.type) {
        case 'SESSION_LOGIN':
            return true;
        case 'SESSION_LOGOUT':
            return false;
        default:
            return state;
    };
};