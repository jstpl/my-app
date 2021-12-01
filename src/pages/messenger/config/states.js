import CrudReducer from "../../../packages/domain/reducers/CrudReducer";
import messengerReducerPrefix from "../enums/messengerReducerPrefix";

let states = {
    chat: (new CrudReducer(messengerReducerPrefix.chat)).getState(),
    message: (new CrudReducer(messengerReducerPrefix.message)).getState(),
};

export default states;
