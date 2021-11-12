import BaseRpcRepository from "../../../../libs/BaseRpcRepository";

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
}

class AuthRepository extends BaseRpcRepository {

    async getTokenByForm(body) {
        /*const body = {
            login: 'admin',
            password: 'Wwwqqq111',
        };*/
        let requestEntity = {
            method: 'authentication.getTokenByPassword',
            body: body,
        };
        let clientPromise = this.sendRequest(requestEntity);
        return createRpcPromise(clientPromise);
    }
}

export default new AuthRepository();
