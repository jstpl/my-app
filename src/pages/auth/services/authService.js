
import store from '../../../app/store';
import * as authAction from '../actions/authActions';
import authRepository from '../repositories/rpc/authRepository';
import {toast} from 'react-toastify';
import eventEmitter from '../../../app/libs/eventEmitter';
import * as authEventEnum from '../../auth/enums/authEventEnum';

let authService = {
    authByForm: function (form) {
        return authRepository.getTokenByForm(form)
            .then(function (token) {
                eventEmitter.emit(authEventEnum.AUTHORIZATION, token);
                //toast.success("Success!" + token);
                let identityEntity = {
                    id: 1234,
                    name: 'Jasy'
                };
                store.dispatch(authAction.authorizationSuccess(identityEntity));
            })
            .catch(function (error) {
                let message = error.message;
                if(error.data !== undefined) {
                    message = message + JSON.stringify(error.data);
                }
                toast.error(message);
            });
    },
};

export default authService;
