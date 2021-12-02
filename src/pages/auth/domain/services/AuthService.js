import eventEmitter from '../../../../packages/event/eventEmitter';
import authEventEnum from "../enums/authEventEnum";
import container from "../../../../app/config/container";

export default class AuthService {

    constructor(authRpcRepository, tokenStorageRepository, tokenStateRepository) {
        this.authRpcRepository = authRpcRepository;
        this.tokenStorageRepository = tokenStorageRepository;
        this.tokenStateRepository = tokenStateRepository;
    }

    async authByForm(form) {
        try {
            let token = await this.authRpcRepository.getTokenByForm(form);
            this.tokenStorageRepository.setToken(token);
            container.security.services.security.token = token;

            eventEmitter.emit(authEventEnum.AUTHORIZATION, token);
            let identityEntity = {
                id: 1234,
                name: 'Jasy'
            };

            // container.security.services.security.identity = identityEntity;


            this.tokenStorageRepository.setIdentity(identityEntity);
            this.tokenStateRepository.setIdentity(identityEntity);

            container.security.services.security.init();

            // let store = container.get('store');
            // store.dispatch(authAction.authorizationSuccess(identityEntity));
            return token;
        } catch (error) {
            throw error;
        }
    }
}
