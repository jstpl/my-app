import ChatRepository from "./repositories/rpc/ChatRepository";
import ChatService from "./services/ChatService";
import TokenRepository from "../auth/repositories/storage/TokenRepository";

let chatService = new ChatService(new ChatRepository(), new TokenRepository());

export {chatService};
