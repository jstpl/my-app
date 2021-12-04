import BaseContainer from "../../packages/container/BaseContainer";
import messenger from "../../pages/messenger/domain";
import auth from "../../pages/user/domain";
import security from "../../packages/security";
import notify from "../../packages/notify";
import rpc from "../../packages/rpc"

let container = new BaseContainer();

Object.assign(container, {
    app: {},
    rpc,
    notify,
    security,
    messenger,
    auth,
});

export default container;
