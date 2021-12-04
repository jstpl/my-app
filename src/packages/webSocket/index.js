import SocketService from "./services/SocketService";

/*let repositories = {
    api: {},
};
repositories.api.transport = new ();*/

let services = {};
services.connection = new SocketService();

export default {
    services,
    // repositories,
};
