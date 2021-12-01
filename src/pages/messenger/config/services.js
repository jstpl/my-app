import ChatService from "../services/ChatService";
import dispatchers from "./dispatchers";
import repositories from "./repositories";
import MessageService from "../services/MessageService";

let services = {};

services.chat = new ChatService(
    dispatchers.chat,
    repositories.rpc.chat
);

services.message = new MessageService(
    dispatchers.message,
    repositories.rpc.message
);

export default services;
