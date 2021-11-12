import rpcClient from "./client";

class BaseRpcRepository {

    sendRequest(requestEntity) {
        return rpcClient.sendRequest(requestEntity);
    }
}

export default BaseRpcRepository;
