import AuthService from "./services/AuthService";
import AuthRpcRepository from "./repositories/rpc/AuthRepository";
// import CrudReducer from "../../../packages/domain/reducers/CrudReducer";

let repositories = {
    api: {},
    state: {},
    storage: {},
};
repositories.api.auth = new AuthRpcRepository();
// repositories.state.token = new TokenStateRepository();
/*repositories.state.token.initialState = {
    identity: {},
    form: {
        login: '',
    },
    users: [],
    userProfile: {}
};*/
// repositories.storage.token = new TokenStorageRepository();

let services = {};
services.auth = new AuthService(repositories.api.auth);

// let states = {};
// states.token = repositories.state.token.state;

// let reducers = {};
// reducers.authToken = repositories.state.token.state;

export default {
    // states,
    // reducers,
    repositories,
    services
};