import AuthService from "./services/AuthService";
import AuthRepository from "./repositories/rpc/AuthRepository";
import TokenRepository from "./repositories/storage/TokenRepository";
import authReducer from "./reducers/authReducer";

let repositories = {
    rpc: {},
    state: {},
    storage: {},
};
repositories.rpc.auth = new AuthRepository();
repositories.storage.token = new TokenRepository();

let services = {};
services.auth = new AuthService(repositories.rpc.auth, repositories.storage.token);


/*let reducers = {};
reducers.auth = new CrudReducer(messengerReducerPrefix.chat);
reducers.message = new CrudReducer(messengerReducerPrefix.message);*/

let states = {};
states.auth = authReducer;

const authDomain = {
    states,
    repositories,
    services
};

export default authDomain;
