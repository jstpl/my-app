// import userReducer from "../../pages/user/reducers/userReducer";
import messengerDomain from "../../pages/messenger/domain";
import authDomain from "../../pages/auth/domain";

export default {
    messengerChat: messengerDomain.states.chat,
    messengerMessage: messengerDomain.states.message,
    // userState: userReducer,
    authToken: authDomain.states.token,
}
