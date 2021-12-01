// import userReducer from "../../pages/user/reducers/userReducer";
// import messengerDomain from "../../pages/messenger/domain";
// import authDomain from "../../pages/auth/domain";
import domain from "./domain";

let reducers = {};

for (let domainName in domain) {
    if(domain.hasOwnProperty(domainName)) {
        let domainInstance = domain[domainName];
        Object.assign(reducers, domainInstance.reducers);
        // console.log(domainInstance);
    }
}

/*Object.assign(
    reducers,
    domain.messenger.reducers,
    domain.auth.reducers
);*/

export default reducers;

/*export default {
    messengerChat: messengerDomain.states.chat,
    messengerMessage: messengerDomain.states.message,
    // userState: userReducer,
    authToken: authDomain.states.token,
}*/
