
import UrlHelper from "./helpers/urlHelper"
import * as authEventEnum from "../pages/auth/enums/authEventEnum";
import eventEmitter from "./libs/eventEmitter";
import {toast} from "react-toastify";

let apiOrigin = 'http://tournament.casino';
let apiOrigin1 = UrlHelper.getOrigin(window.location);

eventEmitter.on(authEventEnum.AUTHORIZATION, function (token) {
    console.log(token)
    toast.success("Success!" + token);
});

export default {
    apiUrl: apiOrigin1 + "/api",
    rpcUrl: apiOrigin + "/json-rpc",
};
