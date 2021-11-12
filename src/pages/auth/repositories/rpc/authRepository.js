import BaseRpcRepository from "../../../../libs/BaseRpcRepository";

class AuthRepository extends BaseRpcRepository {

    getTokenByForm(body) {
        /*const body = {
            login: 'admin',
            password: 'Wwwqqq111',
        };*/
        let requestEntity = {
            method: 'authentication.getTokenByPassword',
            body: body,
        };
        let clientPromise = this.sendRequest(requestEntity);
        return this.createRpcPromise(clientPromise);
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
