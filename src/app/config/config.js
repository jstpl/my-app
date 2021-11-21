import UrlHelper from "../helpers/urlHelper"

let apiOrigin = 'http://tournament.casino';

export default {
    apiUrl: UrlHelper.getOrigin() + "/api",
    rpcUrl: apiOrigin + "/json-rpc",
};
