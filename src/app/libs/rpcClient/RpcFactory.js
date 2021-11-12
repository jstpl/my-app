
import RpcClient from "./RpcClient";
import RpcTransport from "./RpcTransport";
import ResponseEncoder from "./encoders/responseEncoder";
import RequestEncoder from "./encoders/requestEncoder";

class RpcFactory {

    createClient() {
        return new RpcClient(new RpcTransport(), RequestEncoder, ResponseEncoder);
    }
}

export default new RpcFactory();
