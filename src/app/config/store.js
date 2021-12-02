import {combineReducers, createStore} from 'redux';
import reduceHelper from "../../packages/domain/helpers/reduceHelper";
import domain from "./domain";

let domainReducers = reduceHelper.getReducersFromDomains(domain);
let reducers = combineReducers(domainReducers);
const store = createStore(reducers);
export default store;
