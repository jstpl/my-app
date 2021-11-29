import ChatRepository from "./repositories/rpc/ChatRepository";
import ChatService from "./services/ChatService";

let chatService = new ChatService(new ChatRepository());

export {chatService};
