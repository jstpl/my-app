import AuthService from "./services/AuthService";
import AuthRpcRepository from "./repositories/rpc/AuthRepository";
import TokenStorageRepository from "./repositories/storage/TokenRepository";
import authReducer from "./reducers/authReducer";
import TokenStateRepository from "./repositories/state/TokenRepository";
import CrudReducer from "../../../packages/domain/reducers/CrudReducer";

let repositories = {
    rpc: {},
    state: {},
    storage: {},
};
repositories.rpc.auth = new AuthRpcRepository();
repositories.state.token = new TokenStateRepository();
repositories.storage.token = new TokenStorageRepository();

let services = {};
services.auth = new AuthService(repositories.rpc.auth, repositories.storage.token, repositories.state.token);

let reducers = {};
reducers.token = new CrudReducer(repositories.state.token.reducerPrefix);

let states = {};
// states.token = authReducer;
states.token = reducers.token.getState();

const authDomain = {
    states,
    repositories,
    services
};

export default authDomain;
