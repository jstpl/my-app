import AuthService from "./services/AuthService";
import AuthRepository from "./repositories/rpc/AuthRepository";
import TokenRepository from "./repositories/storage/TokenRepository";

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
reducers.chat = new CrudReducer(messengerReducerPrefix.chat);
reducers.message = new CrudReducer(messengerReducerPrefix.message);

let states = {};
states.chat = reducers.chat.getState();
states.message = reducers.message.getState();*/

const authDomain = {
    // states,
    repositories,
    services
};

export default authDomain;
