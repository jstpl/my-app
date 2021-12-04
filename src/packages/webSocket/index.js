import ConnectionService from "./services/ConnectionService";
import SocketEventHandler from "./ibs/SocketEventHandler";

/*let repositories = {
    api: {},
};
repositories.api.transport = new ();*/

let services = {};
let socketEventHandler = new SocketEventHandler();
services.connection = new ConnectionService(socketEventHandler);

export default {
    services,
    // repositories,
};
