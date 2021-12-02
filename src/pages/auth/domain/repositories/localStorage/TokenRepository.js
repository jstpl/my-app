import BaseLocalStorageRepository from "../../../../../packages/permanentStorage/BaseLocalStorageRepository";

export default class TokenRepository extends BaseLocalStorageRepository {

    key() {
        return 'authToken';
    }

    setIdentity(value) {
        this.set('identity', value);
    }

    getIdentity() {
        this.get('identity');
    }
}
