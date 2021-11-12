import rpcClient from "../app/libs/rpcClient";

class BaseRpcRepository {

    sendRequest(requestEntity) {
        return rpcClient.sendRequest(requestEntity);
    }
}

export default BaseRpcRepository;
