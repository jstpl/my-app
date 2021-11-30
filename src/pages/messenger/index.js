import ChatRepository from "./repositories/rpc/ChatRepository";
import ChatService from "./services/ChatService";
import CrudReducer from "../../packages/domain/reducers/CrudReducer";
import DataProvider from "../../packages/domain/DataProvider";

let chatService = new ChatService(new ChatRepository());
chatService.prefix = 'messengerChat';

let reducer = new CrudReducer();
reducer.prefix = chatService.prefix;
reducer.initialState = {
    dataProvider: new DataProvider(),
};
let chatReducer = reducer.run.bind(reducer);

export {chatService, chatReducer};
