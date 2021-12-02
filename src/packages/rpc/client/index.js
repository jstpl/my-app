import Client from "./Client";
import Transport from "./Transport";
import ResponseEncoder from "./encoders/ResponseEncoder";
import RequestEncoder from "./encoders/RequestEncoder";
import TokenRepository from "../../../pages/auth/domain/repositories/localStorage/TokenRepository";

export default new Client(new Transport(), new RequestEncoder(), new ResponseEncoder(), new TokenRepository());
