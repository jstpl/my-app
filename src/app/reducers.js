import {combineReducers} from 'redux';
// Reducers
import userReducer from '../pages/user/reducers/user-reducer';
// import widgetReducer from '../teach/reducers/widget-reducer';
// import searchLayoutReducer from '../teach/reducers/search-layout-reducer';

// Combine Reducers
let reducers = combineReducers({
    userState: userReducer,
    // widgetState: widgetReducer,
    // searchLayoutState: searchLayoutReducer
});

export default reducers;
