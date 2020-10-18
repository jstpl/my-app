
let UrlHelper = {
    getLocation: function(href) {
        return new URL(window.location);
        /*let urlObject = document.createElement("a");
        urlObject.href = href;
        return urlObject;*/
    },
    getOrigin: function (url) {
        return this.getLocation(url).origin;
    }
};

let apiOrigin = UrlHelper.getOrigin(window.location);

export default {
    apiUrl: apiOrigin + "/api",
};