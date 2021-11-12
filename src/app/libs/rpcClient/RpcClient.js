import _ from 'lodash';

/*let __RpcClient = {
    send: function (method, body, meta, version) {
        let requestEntity = {
            method: method,
            body: body,
            meta: meta,
            version: version,
        };
        return this.sendRequest(requestEntity);
    },
};*/

class RpcClient {

    #transport;
    #requestEncoder;
    #responseEncoder;

    constructor(rpcTransport, requestEncoder, responseEncoder) {
        this.transport = rpcTransport;
        this.requestEncoder = requestEncoder;
        this.responseEncoder = responseEncoder;
    }

    sendRequest(requestEntity) {
        let body = this.requestEncoder.encode(requestEntity);
        let axiosPromise = this.transport.send(body);
        return this.createRpcPromise(axiosPromise);
    }

    createRpcPromise(axiosPromise) {
        let that = this;
        return new Promise(function (resolve, reject) {
            axiosPromise
                .then(function (response) {
                    let responseEntity = that.responseEncoder.decode(response);
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
    }
}

export default RpcClient;
