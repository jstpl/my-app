import _ from 'lodash';
import PermanentStorage from "../../../libs/PermanentStorage";

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

class Client {

    #transport;
    #requestEncoder;
    #responseEncoder;

    constructor(transport, requestEncoder, responseEncoder) {
        this.transport = transport;
        this.requestEncoder = requestEncoder;
        this.responseEncoder = responseEncoder;
    }

    sendRequest(requestEntity) {

        let token = PermanentStorage.get('authToken');
        if(!_.isEmpty(token)) {
            _.set(requestEntity, 'meta.Authorization', token);
        }
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

export default Client;
