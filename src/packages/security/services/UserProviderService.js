import container from "../../../app/config/container";
import NullTokenEntity from "../entities/NullTokenEntity";

export default class UserProviderService {

    login(tokenEntity) {
        this._setTokenEntity(tokenEntity);
        // container.auth.repositories.storage.token.getToken();
        // container.auth.repositories.storage.token.getIdentity();
    }

    logout() {
        let tokenEntity = new NullTokenEntity();
        this._setTokenEntity(tokenEntity);
        //container.security.services.security.init();
    }

    getToken() {

    }

    refresh(tokenEntity) {

    }

    _setTokenEntity(tokenEntity) {
        container.security.repositories.storage.token.setTokenEntity(tokenEntity);
        container.security.services.security.tokenEntity = tokenEntity;
    }
}