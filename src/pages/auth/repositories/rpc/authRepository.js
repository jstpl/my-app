
import RpcClient from '../../../../app/libs/rpcClient/RpcClient.js';

class AuthRepository {
    auth(body) {
        /*const body = {
            login: 'admin',
            password: 'Wwwqqq111',
        };*/
        let requestEntity = {
            method: 'authentication.getTokenByPassword',
            body: body,
        };
        return RpcClient.sendRequest(requestEntity);
        //return RpcClient.send('authentication.getTokenByPassword', body);
    }
}

export default new AuthRepository();
