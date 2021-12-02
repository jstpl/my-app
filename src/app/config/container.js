import BaseContainer from "../../packages/container/BaseContainer";
import messenger from "../../pages/messenger/domain";
import auth from "../../pages/auth/domain";

let container = new BaseContainer();

Object.assign(container, {
    app: {},
    messenger,
    auth,
});

/*container.app = {};
container.messenger = messenger;
container.auth = auth;*/

export default container;
