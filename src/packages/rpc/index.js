import TransportRepository from "./repositories/http/TransportRepository";
import ClientService from "./services/ClientService";
import RequestEncoder from "./libs/encoders/RequestEncoder";
import ResponseEncoder from "./libs/encoders/ResponseEncoder";

let repositories = {
    api: {},
};
repositories.api.transport = new TransportRepository();

let services = {};
services.client = new ClientService(repositories.api.transport, new RequestEncoder(), new ResponseEncoder());

export default {
    services,
    repositories,
};
