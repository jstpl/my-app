import RpcTransport from './RpcTransport';
import responseEncoder from './encoders/responseEncoder';
import requestEncoder from './encoders/requestEncoder';
import _ from 'lodash';

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
        let axiosPromise = RpcTransport.send(body);
        return this.createRpcPromise(axiosPromise);
    },
    createRpcPromise: function (axiosPromise) {
        return new Promise(function (resolve, reject) {
            axiosPromise
                .then(function (response) {
                    let responseEntity = responseEncoder.decode(response);
                    if (_.isEmpty(responseEntity.error)) {
                        resolve(responseEntity);
                    } else {
                        reject(responseEntity);
                    }
                })
                .catch(function (error) {
                    let responseEntity = {
                        "jsonrpc": "2.0",
                        "error": {
                            "code": -32300,
                            "message": error,
                            //"data": error,
                        },
                    };
                    reject(responseEntity);
                });
        });
    },
};

export default RpcClient;