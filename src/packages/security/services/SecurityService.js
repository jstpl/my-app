import container from "../../../app/config/container";

export default class SecurityService {

    #_token;
    #_identity;

    init() {
        this.token = container.auth.repositories.storage.token.getToken();
        this.identity = container.auth.repositories.storage.token.getIdentity();
    }

    get token() {
        return this.#_token;
    }

    set token(value) {
        this.#_token = value;
        // container.auth.repositories.storage.token.setToken(value);
    }

    get identity() {
        return this.#_identity;
    }

    set identity(value) {
        this.#_identity = value;
        // container.auth.repositories.storage.token.setIdentity(value);
        // container.auth.repositories.state.token.setIdentity(value);
    }
}