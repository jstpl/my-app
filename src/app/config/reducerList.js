import domain from "./domain";
import reduceHelper from "../../packages/domain/helpers/reduceHelper";

let reducers = {};
let reducersFromDomains = reduceHelper.getReducersFromDomains(domain);
Object.assign(reducers, reducersFromDomains);

export default reducers;
