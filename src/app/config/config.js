import urlHelper from "../../packages/helpers/urlHelper";

let apiOrigin = 'http://tournament.casino';

export default {
    apiUrl: urlHelper.getOrigin() + "/api",
    rpcUrl: apiOrigin + "/json-rpc",
};
