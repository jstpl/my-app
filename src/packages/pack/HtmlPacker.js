let fs = require('fs');
const jsdom = require("jsdom");
const UrlHelper = require("./UrlHelper");

class HtmlPacker {

    constructor(basePath) {
        this.basePath = basePath;
    }

    setCssResourcePacker(cssResourcePacker) {
        this.cssResourcePacker = cssResourcePacker;
    }

    setJsResourcePacker(jsResourcePacker) {
        this.jsResourcePacker = jsResourcePacker;
    }

    setObfuscator(obfuscator) {
        this.obfuscator = obfuscator;
    }

    packCss(htmlCode) {
        const dom = new jsdom.JSDOM(htmlCode);
        let linkElems = dom.window.document.querySelectorAll("link");
        for (let i in linkElems) {
            let elem = linkElems[i];
            if (elem.rel === 'stylesheet') {
                let filePath = this.basePath + '/' + elem.href;
                let cssCode = fs.readFileSync(filePath, {encoding: 'utf-8'});
                cssCode = this.cssResourcePacker.pack(cssCode);
                htmlCode = htmlCode.replace(elem.outerHTML, '<style>' + cssCode + '</style>');
            }
        }
        return htmlCode;
    }

    packJs(htmlCode) {
        const dom = new jsdom.JSDOM(htmlCode);
        let scriptElems = dom.window.document.querySelectorAll("script");
        for (let i in scriptElems) {
            let elem = scriptElems[i];
            if (typeof elem.src !== 'undefined' && elem.innerHTML === '') {
                let filePath = this.basePath + '/' + elem.src;
                let jsCode = fs.readFileSync(filePath, {encoding: 'utf-8'});
                jsCode = this.jsResourcePacker.pack(jsCode);
                if(this.obfuscator) {
                    jsCode = this.obfuscator.run(jsCode);
                }
                let tagCode = elem.outerHTML;
                let urlHelper = new UrlHelper();
                elem.src = urlHelper.generateBase64Url(jsCode, 'text/javascript');
                let code = elem.outerHTML;
                htmlCode = htmlCode.replace(tagCode, code);
            }
        }
        return htmlCode;
    }

    pack(htmlCode) {
        htmlCode = this.packCss(htmlCode);
        htmlCode = this.packJs(htmlCode);
        return htmlCode;
    }
}

module.exports = HtmlPacker;
