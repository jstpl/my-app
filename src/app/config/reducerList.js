import userReducer from "../../pages/user/reducers/userReducer";
import authReducer from "../../pages/auth/reducers/authReducer";
import messengerStates from "../../pages/messenger/config/messengerStates";

export default {
    chatState: messengerStates.chat,
    messageState: messengerStates.message,
    userState: userReducer,
    authState: authReducer,
}
