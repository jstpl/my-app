import axios from 'axios';
import _ from 'lodash';
import config from '../../app/config'

let requestEncoder = {
    encode: function (requestEntity) {
        requestEntity.meta = typeof requestEntity.meta === 'object' ? requestEntity.meta : {};
        requestEntity.meta.version = !_.isEmpty(requestEntity.version) ? requestEntity.version : 1;
        let request = {
            jsonrpc: '2.0',
            method: requestEntity.method,
            params: {},
            id: typeof requestEntity.id !== 'undefined' ? requestEntity.id : +new Date(),
        };
        if (!_.isEmpty(requestEntity.body)) {
            request.params.body = requestEntity.body;
        }
        if (!_.isEmpty(requestEntity.meta)) {
            request.params.meta = requestEntity.meta;
        }
        return request;
    },
    decode: function () {

    },
};

let responseEncoder = {
    encode: function () {

    },
    decode: function (data) {
        let responseEntity = {};
        if (!_.isEmpty(data.result)) {
            let result = data.result;
            if (!_.isEmpty(result.body)) {
                responseEntity.body = result.body;
            }
            if (!_.isEmpty(result.meta)) {
                responseEntity.meta = result.meta;
            }
        }
        if (!_.isEmpty(data.error)) {
            responseEntity.error = data.error;
        }
        responseEntity.id = !_.isEmpty(responseEntity.id) ? responseEntity.id : +new Date();
        return responseEntity;
    },
};

let transport = {
    send: function (body) {
        let options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return axios.post(config.rpcUrl, body, options);
    }
};

let RpcClient = {
    /*send: function (method, body, meta, version) {
        let requestEntity = {
            method: method,
            body: body,
            meta: meta,
            version: version,
        };
        return this.sendRequest(requestEntity);
    },*/
    sendRequest: function (requestEntity) {
        let body = requestEncoder.encode(requestEntity);
        let axiosPromise = transport.send(body);
        return this.createRpcPromise(axiosPromise);
    },
    createRpcPromise: function (axiosPromise) {
        return new Promise(function (resolve, reject) {
            axiosPromise
                .then(function (response) {
                    let responseEntity = responseEncoder.decode(response.data);
                    if(_.isEmpty(responseEntity.error)) {
                        resolve(responseEntity);
                    } else {
                        reject(responseEntity);
                    }
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },
};

export default RpcClient;
