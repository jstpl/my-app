import store from '../../../app/store';
import * as authAction from '../actions/authActions';
import AuthRepository from '../repositories/rpc/AuthRepository';
import eventEmitter from '../../../app/libs/eventEmitter';
import authEventEnum from "../enums/authEventEnum";
import PermanentStorage from "../../../libs/PermanentStorage";

class AuthService {

    constructor(authRepository) {
        this.authRepository = authRepository;
    }

    async authByForm(form) {
        //let token1 = PermanentStorage.get('authToken');
        //console.log(token1);
        let token = await this.authRepository.getTokenByForm(form);
        PermanentStorage.set('authToken', token);

        eventEmitter.emit(authEventEnum.AUTHORIZATION, token);
        let identityEntity = {
            id: 1234,
            name: 'Jasy'
        };
        store.dispatch(authAction.authorizationSuccess(identityEntity));
        return token;
    }

    /*authByForm(form) {
        return this.authRepository.getTokenByForm(form)
            .then(function (token) {
                //console.log(token);
                eventEmitter.emit(authEventEnum.AUTHORIZATION, token);
                //toast.success("Success!" + token);
                let identityEntity = {
                    id: 1234,
                    name: 'Jasy'
                };
                store.dispatch(authAction.authorizationSuccess(identityEntity));
                return token;
            })
            .catch(function (error) {
                // let message = error.message;
                // if(error.data !== undefined) {
                //     message = message + JSON.stringify(error.data);
                // }
                throw error;
            });
    }*/
}

export default new AuthService(new AuthRepository());
