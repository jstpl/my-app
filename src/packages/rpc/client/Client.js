import _ from 'lodash';

/*let __Client = {
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

export default class Client {

    #transport;
    #requestEncoder;
    #responseEncoder;

    constructor(transport, requestEncoder, responseEncoder, tokenRepository) {
        this.transport = transport;
        this.requestEncoder = requestEncoder;
        this.responseEncoder = responseEncoder;
        this.tokenRepository= tokenRepository;
    }

    sendRequest(requestEntity) {
        this.prepareRequest(requestEntity);
        let body = this.requestEncoder.encode(requestEntity);
        let axiosPromise = this.transport.send(body);
        let that = this;
        return axiosPromise
            .then(function (response) {
                let responseEntity = that.responseEncoder.decode(response);
                if (_.isEmpty(responseEntity.error)) {
                    return responseEntity;
                } else {
                    throw responseEntity;
                }
            })
            .catch(function (response) {
                let responseEntity = that.responseEncoder.decode(response);
                //console.log(responseEntity);
                throw responseEntity;
            });
        // return this.createRpcPromise(axiosPromise);
    }

    prepareRequest(requestEntity) {
        let token = this.tokenRepository.get();
        if (!_.isEmpty(token)) {
            _.set(requestEntity, 'meta.Authorization', token);
        }
    }

    /*createRpcPromise(axiosPromise) {
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
    }*/
}
