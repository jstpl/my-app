export default class BasePermanentStorageRepository {

    #_permanentStorage;

    constructor(permanentStorage) {
        this.#_permanentStorage = permanentStorage;
    }

    get permanentStorage() {
        return this.#_permanentStorage;
    }

    set permanentStorage(value) {
        this.#_permanentStorage = value;
    }

    key() {
        throw new Error('Method "key" not implemented!');
    }

    get() {
        return this.permanentStorage.get(this.key());
    }

    set(value) {
        this.permanentStorage.set(this.key(), value);
    }

    reset() {
        this.permanentStorage.remove(this.key());
    }
}
