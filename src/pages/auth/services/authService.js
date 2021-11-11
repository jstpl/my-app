
import store from '../../../app/store';
import * as authAction from '../actions/authActions';
import authRepository from '../repositories/rpc/authRepository';
import {toast} from 'react-toastify';

let authService = {
    getTokenByForm: function (form) {
// let authRepository = new AuthRepository();
        authRepository.auth(form)
            .then(function (responseEntity) {
                //console.log(responseEntity);
                toast.success("Success!" + responseEntity.body.token);
                let identityEntity = {
                    id: 1234,
                    name: 'Jasy'
                };
                store.dispatch(authAction.authorizationSuccess(identityEntity));
            })
            .catch(function (responseEntity) {
                //console.log(JSON.stringify(responseEntity.error));
                toast.error(responseEntity.error.message);
            });
    }
};

export default authService;
