import Client from "./Client";
import ResponseEncoder from "./encoders/ResponseEncoder";
import RequestEncoder from "./encoders/RequestEncoder";
import TransportRepository from "../repositories/http/TransportRepository";
// import TokenRepository from "../../../pages/auth/domain/repositories/localStorage/TokenRepository";

export default new Client(new TransportRepository(), new RequestEncoder(), new ResponseEncoder());
