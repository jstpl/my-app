
import Client from "./Client";
import Transport from "./Transport";
import ResponseEncoder from "./encoders/responseEncoder";
import RequestEncoder from "./encoders/requestEncoder";

class RpcFactory {

    createClient() {
        return new Client(new Transport(), new RequestEncoder(), new ResponseEncoder());
    }
}

export default new RpcFactory();
