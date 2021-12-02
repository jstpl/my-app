import container from "../../../app/config/container";
import NullTokenEntity from "../entities/NullTokenEntity";
import BaseTokenEntity from "../entities/BaseTokenEntity";
import entityHelper from "../../helpers/entityHelper";

export default class SecurityService {

    // #_token;
    // #_identity;
    #_tokenEntity;
    // #_identityEntity;

    init() {
        // this.token = container.auth.repositories.storage.token.getToken();
        // this.identity = container.auth.repositories.storage.token.getIdentity();

        this.tokenEntity = container.security.repositories.storage.token.getTokenEntity();

        //entityHelper.getValues(this.tokenEntity);

        // console.log(Object.getOwnPropertyNames(this.tokenEntity));
        // console.log(Object.keys(this.tokenEntity));
    }

    /*get token() {
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
    }*/

    get tokenEntity() {
        if(!this.#_tokenEntity || !this.#_tokenEntity instanceof BaseTokenEntity) {
            return new NullTokenEntity();
        }
        return this.#_tokenEntity;
    }

    set tokenEntity(value) {
        this.#_tokenEntity = value;
    }

    /*get identityEntity() {
        return this.#_identityEntity;
    }

    set identityEntity(value) {
        this.#_identityEntity = value;
    }*/
}