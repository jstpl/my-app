import store from '../../../app/config/store';
import * as authAction from '../actions/authActions';
import eventEmitter from '../../../app/singletons/eventEmitter';
import authEventEnum from "../enums/authEventEnum";
import {toast} from "react-toastify";


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
            store.dispatch(authAction.authorizationSuccess(identityEntity));
            return token;
        } catch (error) {

            throw error;

            toast.error(error.message);

            if(error.name === 'UnprocessableEntityError') {
                toast.error(11111);
            } else {
                //toast.error(error.message);
            }

            //console.log(error);
        }
    }
}
