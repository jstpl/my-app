import axios from 'axios';
import _ from 'lodash';

let RpcClient = {
    url: 'http://daryn.orl/json-rpc',
    send: function (method, body, meta, version) {


        let request = {
            method: method,
            body: body,
            meta: meta,
        };

        return this.sendRequest(request);
    },
    encodeRequest: function(requestEntity) {

        requestEntity.meta = typeof requestEntity.meta === 'object' ? requestEntity.meta : {};
        requestEntity.meta.version = typeof requestEntity.version !== 'undefined' ? requestEntity.version : 1;

        let axiosBody = {
            jsonrpc: '2.0',
            method: requestEntity.method,
            params: {},
            id: typeof requestEntity.id !== 'undefined' ? requestEntity.id : +new Date(),
        };

        if(!_.isEmpty(requestEntity.body)) {
            axiosBody.params.body = requestEntity.body;
        }

        if(!_.isEmpty(requestEntity.meta)) {
            axiosBody.params.meta = requestEntity.meta;
        }
        return axiosBody;
    },
    decodeRequest: function() {

    },
    decodeResponse: function(data) {
        let responseEntity = {};
        if(!_.isEmpty(data.result)) {
            let result = data.result;
            if(!_.isEmpty(result.body)) {
                responseEntity.body = result.body;
            }
            if(!_.isEmpty(result.meta)) {
                responseEntity.meta = result.meta;
            }
        }
        responseEntity.id = !_.isEmpty(responseEntity.id) ? responseEntity.id : +new Date();
        return responseEntity;
    },
    sendRequest: function (requestEntity) {


        let body = RpcClient.encodeRequest(requestEntity);
        let options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let axiosPromise = axios.post(this.url, body, options);
        return new Promise(function(resolve, reject) {
            axiosPromise
                .then(function (response) {
                    let responseEntity = RpcClient.decodeResponse(response.data);
                    resolve(responseEntity);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },
};

export default RpcClient;
