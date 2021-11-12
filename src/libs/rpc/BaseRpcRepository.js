import rpcClient from "./rpcClient";

class BaseRpcRepository {

    sendRequest(requestEntity) {
        return rpcClient.sendRequest(requestEntity);
    }
}

export default BaseRpcRepository;
