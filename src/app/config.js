
import UrlHelper from "./helpers/urlHelper"

let apiOrigin = UrlHelper.getOrigin(window.location);

export default {
    apiUrl: apiOrigin + "/api",
};
