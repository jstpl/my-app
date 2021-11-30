import ChatRepository from "./repositories/rpc/ChatRepository";
import ChatService from "./services/ChatService";
import CrudReducer from "../../packages/domain/reducers/CrudReducer";
import DataProvider from "../../packages/domain/DataProvider";

const actionPrefix = 'messengerChat';

let chatService = new ChatService(new ChatRepository());
chatService.prefix = actionPrefix;

let reducer = new CrudReducer();
reducer.prefix = actionPrefix;
reducer.initialState = {
    dataProvider: new DataProvider(),
};
let chatReducer = reducer.run.bind(reducer);

export {chatService, chatReducer};
