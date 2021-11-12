import axios from 'axios';
import config from '../../config'

let RpcTransport = {
    send: function (body) {
        let options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        let axiosPromise = axios.post(config.rpcUrl, body, options);
        return this.createPromise(axiosPromise);
    },
    createPromise: function (axiosPromise) {
        return new Promise(function (resolve, reject) {
            axiosPromise
                .then(function (response) {
                    if(response.headers['content-type'] === 'application/json') {
                        if(typeof response.data === 'object') {
                            resolve(response.data);
                        } else {
                            reject("Transport error. Parse error.");
                        }
                    } else {
                        reject("Transport error. Content type invalid.");
                    }
                })
                .catch(function (error) {
                    reject("Transport error.");
                });
        });
    },
};

export default RpcTransport;
