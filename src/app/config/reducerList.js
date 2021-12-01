// import userReducer from "../../pages/user/reducers/userReducer";
import messengerDomain from "../../pages/messenger/domain";
import authDomain from "../../pages/auth/domain";

export default {
    messengerChat: messengerDomain.repositories.state.chat.state,
    messengerMessage: messengerDomain.repositories.state.message.state,
    // userState: userReducer,
    authToken: authDomain.states.token,
}
