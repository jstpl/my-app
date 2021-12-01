import BasePermanentStorageRepository from "../../../../../packages/permanentStorage/BasePermanentStorageRepository";

export default class TokenRepository extends BasePermanentStorageRepository {

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
