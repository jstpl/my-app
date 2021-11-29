import {combineReducers, createStore} from 'redux';
// Reducers
import userReducer from '../../pages/user/reducers/userReducer';
import chatReducer from '../../pages/messenger/reducers/chatReducer';
import authReducer from '../../pages/auth/reducers/authReducer';

// Combine Reducers
let reducers = combineReducers({
    chatState: chatReducer,
    userState: userReducer,
    authState: authReducer,
});

const store = createStore(reducers);
export default store;
