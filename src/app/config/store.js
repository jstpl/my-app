import {combineReducers, createStore} from 'redux';
import reduceHelper from "../../packages/domain/helpers/reduceHelper";
import container from "./container";

let domainReducers = reduceHelper.getReducersFromDomains(container);
let reducers = combineReducers(domainReducers);
const store = createStore(reducers);
export default store;
