
import RpcClient from '../../../../app/libs/rpcClient/RpcClient.js';
import responseEncoder from "../../../../app/libs/rpcClient/encoders/responseEncoder";
import _ from "lodash";

class AuthRepository {
    getTokenByForm(body) {
        /*const body = {
            login: 'admin',
            password: 'Wwwqqq111',
        };*/
        let requestEntity = {
            method: 'authentication.getTokenByPassword',
            body: body,
        };
        let clientPromise = RpcClient.sendRequest(requestEntity);
        return this.createRpcPromise(clientPromise);
        // console.log(responseEntity);
        // return responseEntity.body.token;
        //return RpcClient.send('authentication.getTokenByPassword', body);
    }

    createRpcPromise(axiosPromise) {
        return new Promise(function (resolve, reject) {
            axiosPromise
                .then(function (responseEntity) {
                    resolve(responseEntity.body.token);
                })
                .catch(function (responseEntity) {
                    reject(responseEntity.error);
                });
        });
    }
}

export default new AuthRepository();
