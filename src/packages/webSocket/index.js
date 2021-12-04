import ConnectionService from "./services/ConnectionService";

/*let repositories = {
    api: {},
};
repositories.api.transport = new ();*/

let services = {};
services.connection = new ConnectionService();

export default {
    services,
    // repositories,
};
