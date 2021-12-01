import userReducer from "../../pages/user/reducers/userReducer";
import authReducer from "../../pages/auth/reducers/authReducer";
import messengerDomain from "../../pages/messenger/domain";

export default {
    messengerChat: messengerDomain.states.chat,
    messengerMessage: messengerDomain.states.message,
    userState: userReducer,
    authState: authReducer,
}
