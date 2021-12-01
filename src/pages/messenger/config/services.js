import ChatService from "../services/ChatService";
import messengerDispatchers from "./messengerDispatchers";
import repositories from "./repositories";
import MessageService from "../services/MessageService";

let services = {};

services.chat = new ChatService(
    messengerDispatchers.chat,
    repositories.chatRpc
);

services.message = new MessageService(
    messengerDispatchers.message,
    repositories.messageRpc
);

export default services;
