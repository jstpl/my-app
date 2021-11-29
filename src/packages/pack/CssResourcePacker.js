const UrlHelper = require("./UrlHelper");
const MimeType = require("./../helpers/MimeType");
const BasePacker = require("./BasePacker");

class CssResourcePacker extends BasePacker {

    constructor(fileHelper) {
        super();
        this.fileHelper = fileHelper;
    }

    replaceContent(jsCode, arr) {
        for (let i in arr) {
            let entity = arr[i];
            let target = 'url("' + entity.url + '")';
            jsCode = jsCode.replace(entity.source, target);
        }
        return jsCode;
    }

    parseRegexp(jsCode) {
        var re = /url\(([^.]+\.(.+))\)/g;
        var m;
        let arr = [];
        do {
            m = re.exec(jsCode);
            if (m) {
                arr.push(m);
            }
        } while (m);
        return arr;
    }

    parse(regexpData) {
        let arr = [];

        for (let i in regexpData) {
            let m = regexpData[i];
            let imgEntity = {
                source: m[0],
                fileName: m[1],
                ext: m[2],
            };

            imgEntity.fileName = imgEntity.fileName.replace('"', '');
            imgEntity.fileName = imgEntity.fileName.replace("'", '');
            imgEntity.content = this.fileHelper.getContent(imgEntity.fileName);
            let mimeType = new MimeType();
            imgEntity.mimeType = mimeType.getTypeByExt(imgEntity.ext);

            let urlHelper = new UrlHelper();
            imgEntity.url = urlHelper.generateBase64Url(imgEntity.content, imgEntity.mimeType);

            arr.push(imgEntity);
        }
        return arr;
    }
}

module.exports = CssResourcePacker;
