
import UrlHelper from "./helpers/urlHelper"

let apiOrigin = 'http://daryn.orl';
let apiOrigin1 = UrlHelper.getOrigin(window.location);

export default {
    apiUrl: apiOrigin1 + "/api",
    rpcUrl: apiOrigin + "/json-rpc",
};
