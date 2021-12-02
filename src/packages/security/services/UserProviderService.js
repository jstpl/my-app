import container from "../../../app/config/container";
import NullTokenEntity from "../entities/NullTokenEntity";
import BaseTokenEntity from "../entities/BaseTokenEntity";
import _ from 'lodash';
import assertHelper from "../../helpers/assertHelper";

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
        let tokenEntity = container.security.repositories.storage.token.getTokenEntity();
        return this._forgeTokenEntity(tokenEntity);
    }

    refresh(tokenEntity) {

    }

    _forgeTokenEntity(tokenEntity) {
        if(!tokenEntity instanceof BaseTokenEntity) {
            tokenEntity = new NullTokenEntity();
        }
        return tokenEntity;
    }

    _setTokenEntity(tokenEntity) {
        assertHelper.assertClass(tokenEntity, BaseTokenEntity);
        //tokenEntity = this._forgeTokenEntity(tokenEntity);
        container.security.repositories.storage.token.setTokenEntity(tokenEntity);
        container.security.services.security.tokenEntity = tokenEntity;
    }
}