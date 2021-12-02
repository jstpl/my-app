import eventEmitter from '../../../../packages/event/eventEmitter';
import authEventEnum from "../enums/authEventEnum";

export default class AuthService {

    constructor(authRpcRepository, tokenStorageRepository, tokenStateRepository) {
        this.authRpcRepository = authRpcRepository;
        this.tokenStorageRepository = tokenStorageRepository;
        this.tokenStateRepository = tokenStateRepository;
    }

    async authByForm(form) {
        try {
            let token = await this.authRpcRepository.getTokenByForm(form);
            this.tokenStorageRepository.set(token);

            eventEmitter.emit(authEventEnum.AUTHORIZATION, token);
            let identityEntity = {
                id: 1234,
                name: 'Jasy'
            };
            this.tokenStateRepository.setIdentity(identityEntity);
            // let store = container.get('store');
            // store.dispatch(authAction.authorizationSuccess(identityEntity));
            return token;
        } catch (error) {
            throw error;
        }
    }
}
