import UserProviderService from "./services/UserProviderService";
import TokenStorageRepository from "./repositories/localStorage/TokenRepository";

let repositories = {
    api: {},
    state: {},
    storage: {},
};
repositories.storage.token = new TokenStorageRepository();


let services = {};
services.userProvider = new UserProviderService();

export default {
    services,
    repositories,
};
