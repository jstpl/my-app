import rpcClient from "../client";

export default class BaseRpcRepository {

    sendRequest(requestEntity) {
        return rpcClient.sendRequest(requestEntity);
    }

    sendByMethod(method, body = {}, meta = {}) {
        let requestEntity = {};
        requestEntity.method = method;
        if(body) {
            requestEntity.body = body;
        }
        if(meta) {
            requestEntity.meta = meta;
        }
        return this.sendRequest(requestEntity);
    }
}
