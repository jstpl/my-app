import axios from 'axios';
import config from '../../config'

let RpcTransport = {
    send: function (body) {
        let options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return axios.post(config.rpcUrl, body, options);
    }
};

export default RpcTransport;
