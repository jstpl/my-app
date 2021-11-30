import {combineReducers, createStore} from 'redux';

// Reducers
import userReducer from '../../pages/user/reducers/userReducer';
import authReducer from '../../pages/auth/reducers/authReducer';
import {chatService} from "../../pages/messenger";
// import {chatReducer} from '../../pages/messenger';

// Combine Reducers
let reducers = combineReducers({
    chatState: chatService.reducer.getState(),
    // chatState: chatReducer,
    userState: userReducer,
    authState: authReducer,
});

const store = createStore(reducers);
export default store;
