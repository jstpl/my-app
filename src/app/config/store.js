import {combineReducers, createStore} from 'redux';

// Reducers
import userReducer from '../../pages/user/reducers/userReducer';
import authReducer from '../../pages/auth/reducers/authReducer';
import {chatState} from "../../pages/messenger";

// Combine Reducers
let reducers = combineReducers({
    chatState: chatState,
    userState: userReducer,
    authState: authReducer,
});

const store = createStore(reducers);
export default store;
