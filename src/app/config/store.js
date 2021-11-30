import {combineReducers, createStore} from 'redux';
import reducerList from "./reducerList";

let reducers = combineReducers(reducerList);
const store = createStore(reducers);
export default store;
