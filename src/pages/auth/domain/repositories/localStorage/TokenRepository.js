import BaseLocalStorageRepository from "../../../../../packages/permanentStorage/BaseLocalStorageRepository";

export default class TokenRepository extends BaseLocalStorageRepository {

    key() {
        return 'authToken';
    }

    setIdentity(value) {
        this.set('identity', value);
    }

    getIdentity() {
        return this.get('identity');
    }

    setToken(value) {
        this.set('token', value);
    }

    getToken() {
        return this.get('token');
    }
}
