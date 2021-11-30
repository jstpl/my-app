import * as authAction from '../actions/authActions';
import eventEmitter from '../../../packages/event/eventEmitter';
import authEventEnum from "../enums/authEventEnum";
import container from "../../../packages/container/container";

export default class AuthService {

    constructor(authRepository, tokenRepository) {
        this.authRepository = authRepository;
        this.tokenRepository = tokenRepository;
    }

    async authByForm(form) {
        try {
            let token = await this.authRepository.getTokenByForm(form);
            this.tokenRepository.set(token);
            eventEmitter.emit(authEventEnum.AUTHORIZATION, token);
            let identityEntity = {
                id: 1234,
                name: 'Jasy'
            };
            let store = container.get('store');
            store.dispatch(authAction.authorizationSuccess(identityEntity));
            return token;
        } catch (error) {
            throw error;
        }
    }
}
