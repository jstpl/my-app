import axios from 'axios';
import config from '../../config'
import responseEncoder from "./encoders/responseEncoder";
import _ from "lodash";

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
                   // console.log(response.headers['content-type']);
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
                .catch(function (response) {
                    reject("Transport error.");
                });
        });
    },
};

export default RpcTransport;
