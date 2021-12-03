import UserProviderService from "./services/UserProviderService";
import TokenStorageRepository from "./repositories/localStorage/TokenRepository";
import IdentityStateRepository from "./repositories/state/IdentityRepository";

let repositories = {
    api: {},
    state: {},
    storage: {},
};
repositories.storage.token = new TokenStorageRepository();

repositories.state.identity = new IdentityStateRepository();
repositories.state.identity.initialState = {
    identity: {},
};

let services = {};
services.userProvider = new UserProviderService();

let reducers = {};
reducers.securityIdentity = repositories.state.identity.state;

export default {
    reducers,
    services,
    repositories,
};
