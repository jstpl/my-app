import Client from "./Client";
import Transport from "./Transport";
import ResponseEncoder from "./encoders/ResponseEncoder";
import RequestEncoder from "./encoders/RequestEncoder";

export default new Client(new Transport(), new RequestEncoder(), new ResponseEncoder());
