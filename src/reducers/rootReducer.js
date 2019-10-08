import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
    user: usersReducer,
    session: sessionReducer
});

export default rootReducer