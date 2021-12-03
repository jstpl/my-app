import BaseCrudStateRepository from "../../../domain/repositories/state/BaseCrudStateRepository";

export default class IdentityRepository extends BaseCrudStateRepository {

    get reducerPrefix() {
        return 'securityIdentity';
    }

    setIdentity(identity) {
        this.setValue({
            identity
        });
    }
}
