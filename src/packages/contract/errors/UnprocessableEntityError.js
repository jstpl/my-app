
export default class UnprocessableEntityError extends Error {

    _errors = [];

    setErrors(errors) {
        this._errors = errors;
    }

    getErrors() {
        return this._errors;
    }
}
