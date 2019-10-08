export default function usersReducer(
    state = false, action 
) {
    switch (action.type) {
        case 'SESSION_LOGIN':
            return true;
        default:
            return state;
    };
};