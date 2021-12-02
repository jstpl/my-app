import _ from 'lodash';
import eventEmitter from "../../event/eventEmitter";
import rpcEventEnum from "../enums/rpcEventEnum";
import UnprocessableEntityError from "../../contract/errors/UnprocessableEntityError";
import container from "../../../app/config/container";

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

    constructor(transport, requestEncoder, responseEncoder, tokenRepository = null) {
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
                    } else {
                        throw new Error(responseEntity.error.message);
                    }
                }
            })
            .catch(function (error) {
                // console.log(error.message);
                eventEmitter.emit(rpcEventEnum.CLIENT_ERROR, error);
                throw error;
            });
    }

    prepareRequest(requestEntity) {
        if(!this.tokenRepository) {
            this.tokenRepository = container.auth.repositories.storage.token;
        }
        let token = this.tokenRepository.getToken();
        if (!_.isEmpty(token)) {
            _.set(requestEntity, 'meta.Authorization', token);
        }
    }
}
