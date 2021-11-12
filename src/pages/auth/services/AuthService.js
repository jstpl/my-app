import store from '../../../app/store';
import * as authAction from '../actions/authActions';
import eventEmitter from '../../../app/singletons/eventEmitter';
import authEventEnum from "../enums/authEventEnum";
import TokenRepository from "../repositories/storage/TokenRepository";

export default class AuthService {

    constructor(authRepository) {
        this.authRepository = authRepository;
        this.tokenRepository = new TokenRepository();
    }

    async authByForm(form) {
        let token = await this.authRepository.getTokenByForm(form);
        this.tokenRepository.set(token);
        eventEmitter.emit(authEventEnum.AUTHORIZATION, token);
        let identityEntity = {
            id: 1234,
            name: 'Jasy'
        };
        store.dispatch(authAction.authorizationSuccess(identityEntity));
        return token;
    }
}
