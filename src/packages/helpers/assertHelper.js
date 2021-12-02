import AssertTypeError from "../contract/errors/AssertTypeError";

class AssertHelper {

    assertClass(instance, className) {
        if (typeof instance !== 'object') {
            throw new AssertTypeError('Is not object!');
        }
        if (!instance instanceof className) {
            throw new AssertTypeError('Is not class "' + className + '"!');
        }
    }
}

export default new AssertHelper();