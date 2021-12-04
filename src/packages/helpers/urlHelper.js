
class UrlHelper {

    getLocation(href) {
        return new URL(window.location);
        /*let urlObject = document.createElement("a");
        urlObject.href = href;
        return urlObject;*/
    }

    getOrigin(url) {
        url = url || window.location;
        return this.getLocation(url).origin;
    }
}

export default new UrlHelper();
