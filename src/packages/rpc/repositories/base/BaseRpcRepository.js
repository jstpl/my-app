import container from "../../../../app/config/container";

export default class BaseRpcRepository {

    sendRequest(requestEntity) {
        return container.rpc.services.client.sendRequest(requestEntity);
        //return rpcClient.sendRequest(requestEntity);
    }

    sendByMethod(method, body = {}, meta = {}) {
        let requestEntity = {};
        requestEntity.method = method;
        if (body) {
            requestEntity.body = body;
        }
        if (meta) {
            requestEntity.meta = meta;
        }
        return this.sendRequest(requestEntity);
    }
}
