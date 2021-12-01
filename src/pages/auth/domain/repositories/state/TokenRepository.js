import BaseCrudStateRepository from "../../../../../packages/domain/repositories/state/BaseCrudStateRepository";

export default class TokenRepository extends BaseCrudStateRepository {

    get reducerPrefix() {
        return 'authToken';
    }

    setIdentity(identity) {
        this.setValue({
            identity
        });
    }
}
