import BaseRpcRepository from "../../../../packages/rpc/BaseRpcRepository";

/*import eventEmitter from "../../../../app/libs/eventEmitter";
import authEventEnum from "../../enums/authEventEnum";
import store from "../../../../app/store";
import * as authAction from "../../actions/authActions";

function createRpcPromise(axiosPromise) {
    return new Promise(function (resolve, reject) {
        axiosPromise
            .then(function (responseEntity) {
                resolve(responseEntity.body.token);
            })
            .catch(function (responseEntity) {
                reject(responseEntity.error);
            });
    });
}*/

export default class ChatRepository extends BaseRpcRepository {
    async all() {
        let requestEntity = {
            method: 'messenger-chat.all',
           // body: body,
        };

        try {
            let responseEntity = await this.sendRequest(requestEntity);
            return responseEntity;
        } catch (error) {
             // console.log(error);
            throw error;
        }

        /*const body = {
            login: 'admin',
            password: 'Wwwqqq111',
        };*/
        /*let requestEntity = {
            method: 'authentication.getTokenByPassword',
            body: body,
        };
        let clientPromise = this.sendRequest(requestEntity);
        return clientPromise
            .then(function (responseEntity) {
                return responseEntity.body.token;
            })
            .catch(function (responseEntity) {
                throw responseEntity.error;
            });*/

        // return createRpcPromise(clientPromise);
    }
}
