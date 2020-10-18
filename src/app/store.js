import {combineReducers, createStore} from 'redux';
// Reducers
import userReducer from '../pages/user/reducers/userReducer';
// import widgetReducer from '../teach/reducers/widget-reducer';
// import searchLayoutReducer from '../teach/reducers/search-layout-reducer';

// Combine Reducers
let reducers = combineReducers({
    userState: userReducer,
    // widgetState: widgetReducer,
    // searchLayoutState: searchLayoutReducer
});

const store = createStore(reducers);
export default store;
