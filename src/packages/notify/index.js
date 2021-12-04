import AuthRpcRepository from "../../pages/user/domain/repositories/rpc/AuthRepository";
import AuthService from "../../pages/user/domain/services/AuthService";
import ToastRepository from "./services/repositories/react-toastify/ToastRepository";
import ToastService from "./services/ToastService";

let repositories = {
    api: {},
    state: {},
    view: {},
};
repositories.view.toast = new ToastRepository();
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
services.toast = new ToastService(repositories.view.toast);

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