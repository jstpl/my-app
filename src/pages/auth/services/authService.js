
import store from '../../../app/store';
import * as authAction from '../actions/authActions';
import authRepository from '../repositories/rpc/authRepository';
import {toast} from 'react-toastify';

let authService = {
    authByForm: function (form) {
        authRepository.getTokenByForm(form)
            .then(function (token) {
                toast.success("Success!" + token);
                let identityEntity = {
                    id: 1234,
                    name: 'Jasy'
                };
                store.dispatch(authAction.authorizationSuccess(identityEntity));
            })
            .catch(function (error) {
                //console.log(JSON.stringify(responseEntity.error));
                toast.error(error.message);
            });
    }
};

export default authService;
