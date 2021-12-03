import BaseContainer from "../../packages/container/BaseContainer";
import messenger from "../../pages/messenger/domain";
import auth from "../../pages/user/domain";
import security from "../../packages/security";

let container = new BaseContainer();

Object.assign(container, {
    app: {},
    security,
    messenger,
    auth,
});

export default container;
