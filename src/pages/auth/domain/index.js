import AuthService from "./services/AuthService";
import AuthRpcRepository from "./repositories/rpc/AuthRepository";
import TokenStorageRepository from "./repositories/storage/TokenRepository";
import TokenStateRepository from "./repositories/state/TokenRepository";
// import CrudReducer from "../../../packages/domain/reducers/CrudReducer";

let repositories = {
    rpc: {},
    state: {},
    storage: {},
};
repositories.rpc.auth = new AuthRpcRepository();
repositories.state.token = new TokenStateRepository();
repositories.state.token.initialState = {
    identity: {},
    form: {
        login: '',
    },
    users: [],
    userProfile: {}
};
repositories.storage.token = new TokenStorageRepository();

let services = {};
services.auth = new AuthService(repositories.rpc.auth, repositories.storage.token, repositories.state.token);

// let states = {};
// states.token = repositories.state.token.state;

let reducers = {};
reducers.authToken = repositories.state.token.state;

const authDomain = {
    // states,
    reducers,
    repositories,
    services
};

export default authDomain;
