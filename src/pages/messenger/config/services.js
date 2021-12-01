import ChatService from "../services/ChatService";
import dispatchers from "./dispatchers";
import repositories from "./repositories";
import MessageService from "../services/MessageService";

let services = {};

services.chat = new ChatService(
    dispatchers.chat,
    repositories.chatRpc
);

services.message = new MessageService(
    dispatchers.message,
    repositories.messageRpc
);

export default services;
