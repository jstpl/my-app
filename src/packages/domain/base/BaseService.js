export default class BaseService {

    #_reducer;

    get reducer() {
        return this.#_reducer;
    }

    set reducer(value) {
        this.#_reducer = value;
    }
}
