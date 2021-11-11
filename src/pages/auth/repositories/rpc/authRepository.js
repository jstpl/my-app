
import RpcClient from '../../../../app/components/RpcClient.js';

class AuthRepository {
    auth(body) {
        /*const body = {
            login: 'admin',
            password: 'Wwwqqq111',
        };*/
        return RpcClient.send('authentication.getTokenByPassword', body);
    }
}

export default new AuthRepository();
