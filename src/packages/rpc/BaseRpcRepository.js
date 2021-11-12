import rpcClient from "./client";

export default class BaseRpcRepository {

    sendRequest(requestEntity) {
        return rpcClient.sendRequest(requestEntity);
    }
}
