import RpcFactory from "../app/libs/rpcClient/RpcFactory";

let rpcClient = RpcFactory.createClient();

class BaseRpcRepository {

    sendRequest(requestEntity) {
        return rpcClient.sendRequest(requestEntity);
    }
}

export default BaseRpcRepository;
