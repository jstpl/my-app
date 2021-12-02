import BaseLocalStorageRepository from "../../../permanentStorage/BaseLocalStorageRepository";
import TokenEntity from "../../entities/TokenEntity";
import entityHelper from "../../../helpers/entityHelper";

export default class TokenRepository extends BaseLocalStorageRepository {

    key() {
        return 'securityToken';
    }

    setTokenEntity(tokenEntity) {
        let value = entityHelper.getValues(tokenEntity);
        this.set('tokenEntity', value);
    }

    getTokenEntity() {
        let value =  this.get('tokenEntity');
        let tokenEntity = new TokenEntity();
        entityHelper.setValues(tokenEntity, value);
        return tokenEntity;
    }
}
