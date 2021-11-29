
let fs = require('fs');

class FileHelper {

    constructor(basePath = null) {
        this.basePath = basePath;
    }

    getContent(fileName) {
        let filePath = this.basePath + fileName;
        return fs.readFileSync(filePath);
    }
}

module.exports = FileHelper;
