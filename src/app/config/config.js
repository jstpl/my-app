import UrlHelper from "../helpers/urlHelper"

let apiOrigin = 'http://tournament.casino';
let apiOrigin1 = UrlHelper.getOrigin(window.location);

export default {
    apiUrl: apiOrigin1 + "/api",
    varUrl: apiOrigin1 + "/var",
    rpcUrl: apiOrigin + "/json-rpc",
    // rpcUrl: apiOrigin + "/json-rpc/view/index",
};
