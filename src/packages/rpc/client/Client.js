import _ from 'lodash';
import eventEmitter from "../../../app/singletons/eventEmitter";
import rpcEventEnum from "../enums/rpcEventEnum";
import UnprocessableEntityError from "../../contract/errors/UnprocessableEntityError";

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

    transport;
    requestEncoder;
    responseEncoder;

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
                    if(responseEntity.error.code === -32602) {
                        let error = new UnprocessableEntityError(responseEntity.error.message);
                        error.setErrors(responseEntity.error.data);

                        throw error;
                    }
                    throw responseEntity;
                }
            })
            .catch(function (error) {
                // console.log(error.message);
                eventEmitter.emit(rpcEventEnum.CLIENT_ERROR, error);
                throw error;
            });
    }

    prepareRequest(requestEntity) {
        let token = this.tokenRepository.get();
        if (!_.isEmpty(token)) {
            _.set(requestEntity, 'meta.Authorization', token);
        }
    }
}
