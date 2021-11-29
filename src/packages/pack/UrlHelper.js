
module.exports = class UrlHelper {

    generateBase64Url(content, mimeType) {
        let base64Content = Buffer.from(content).toString('base64');
        return 'data:' + mimeType + ';base64,' + base64Content;
    }
};
