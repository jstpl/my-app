import _ from "lodash";
import UnauthorizedError from "../../contract/errors/UnauthorizedError";
import UnprocessableEntityError from "../../contract/errors/UnprocessableEntityError";
import eventEmitter from "../../event/eventEmitter";
import rpcEventEnum from "../enums/rpcEventEnum";
import container from "../../../app/config/container";

export default class ClientService {

    transportRepository;
    requestEncoder;
    responseEncoder;

    constructor(transportRepository, requestEncoder, responseEncoder) {
        this.transportRepository = transportRepository;
        this.requestEncoder = requestEncoder;
        this.responseEncoder = responseEncoder;
    }

    sendRequest(requestEntity) {
        this.prepareRequest(requestEntity);
        let body = this.requestEncoder.encode(requestEntity);
        let axiosPromise = this.transportRepository.send(body);
        let that = this;
        return axiosPromise
            .then(function (response) {
                let responseEntity = that.responseEncoder.decode(response);
                if (_.isEmpty(responseEntity.error)) {
                    return responseEntity;
                } else if(responseEntity.error.code === 401) {
                    throw new UnauthorizedError(responseEntity.error.message);
                } else {
                    if (responseEntity.error.code === -32602) {
                        let error = new UnprocessableEntityError(responseEntity.error.message);
                        error.setErrors(responseEntity.error.data);
                        throw error;
                    } else {
                        throw new Error(responseEntity.error.message);
                    }
                }
            })
            .catch(function (error) {
                eventEmitter.emit(rpcEventEnum.CLIENT_ERROR, error);
                throw error;
            });
    }

    prepareRequest(requestEntity) {
        let tokenEntity = container.security.services.userProvider.getTokenEntity();
        if (tokenEntity.isAuthenticated) {
            _.set(requestEntity, 'meta.Authorization', tokenEntity.value);
        }
    }
}
