
class BasePacker {

    pack(code) {
        let regexpData = this.parseRegexp(code);
        let arr = this.parse(regexpData);
        code = this.replaceContent(code, arr);
        return code;
    }
}

module.exports = BasePacker;
