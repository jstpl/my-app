// import repositories from "./config/repositories";
// import services from "./config/services";
import states from "./config/states";
import ChatService from "./services/ChatService";
// import dispatchers from "./config/dispatchers";
import MessageService from "./services/MessageService";
import ChatDispatcher from "./dispatchers/ChatDispatcher";
import messengerReducerPrefix from "./enums/messengerReducerPrefix";
import MessageDispatcher from "./dispatchers/MessageDispatcher";
import CrudRpcRepository from "../../packages/rpc/CrudRpcRepository";


let repositories = {
    rpc: {}
};
repositories.rpc.chat = new CrudRpcRepository('messenger-chat');
repositories.rpc.message = new CrudRpcRepository('messenger-message');


let dispatchers = {};
dispatchers.chat = new ChatDispatcher(messengerReducerPrefix.chat);
dispatchers.message = new MessageDispatcher(messengerReducerPrefix.message);

let services = {};
services.chat = new ChatService(
    dispatchers.chat,
    repositories.rpc.chat
);

services.message = new MessageService(
    dispatchers.message,
    repositories.rpc.message
);

const messenger = {
    dispatchers,
    states,
    repositories,
    services
};

export default messenger;
