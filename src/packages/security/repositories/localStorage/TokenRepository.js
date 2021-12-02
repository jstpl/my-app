import BaseLocalStorageRepository from "../../../permanentStorage/BaseLocalStorageRepository";
import TokenEntity from "../../entities/TokenEntity";

export default class TokenRepository extends BaseLocalStorageRepository {

    key() {
        return 'securityToken';
    }

    setTokenEntity(tokenEntity) {
        let value = {
            isAuthenticated: tokenEntity.isAuthenticated,
            value: tokenEntity.value,
        };
        this.set('tokenEntity', value);
    }

    getTokenEntity() {
        let value =  this.get('tokenEntity');
        let tokenEntity = new TokenEntity();
        Object.assign(tokenEntity, value);
        // tokenEntity.isAuthenticated = value.isAuthenticated;
        // tokenEntity.value = value.value;
        return tokenEntity;
    }
}
