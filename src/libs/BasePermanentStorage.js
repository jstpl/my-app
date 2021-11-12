import PermanentStorage from "./PermanentStorage";

class BasePermanentStorage {

    #permanentStorage;

    constructor() {
        this.permanentStorage = new PermanentStorage();
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

export default BasePermanentStorage;
