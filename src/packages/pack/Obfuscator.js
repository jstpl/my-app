
let JavaScriptObfuscator = require('javascript-obfuscator');

class Obfuscator {

    constructor(options = null) {
        this.options = options || this.defaultOptions();
    }

    defaultOptions() {
        return {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        };
    }

    run(fileData) {
        let obfuscationResult = JavaScriptObfuscator.obfuscate(fileData, this.options);
        fileData = obfuscationResult.getObfuscatedCode();
        return fileData;
    }
}

module.exports = Obfuscator;
