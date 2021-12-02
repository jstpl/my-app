import container from "../../../app/config/container";
import NullTokenEntity from "../entities/NullTokenEntity";
import BaseTokenEntity from "../entities/BaseTokenEntity";
import assertHelper from "../../helpers/assertHelper";

export default class UserProviderService {

    login(tokenEntity) {
        this._setTokenEntity(tokenEntity);
    }

    logout() {
        let tokenEntity = new NullTokenEntity();
        this._setTokenEntity(tokenEntity);
    }

    getTokenEntity() {
        let tokenEntity = container.security.repositories.storage.token.getTokenEntity();
        return this._forgeTokenEntity(tokenEntity);
    }

    /*refresh(tokenEntity) {

    }*/

    _forgeTokenEntity(tokenEntity) {
        if (!tokenEntity instanceof BaseTokenEntity) {
            tokenEntity = new NullTokenEntity();
        }
        return tokenEntity;
    }

    _setTokenEntity(tokenEntity) {
        assertHelper.assertClass(tokenEntity, BaseTokenEntity);
        container.security.repositories.storage.token.setTokenEntity(tokenEntity);
    }
}