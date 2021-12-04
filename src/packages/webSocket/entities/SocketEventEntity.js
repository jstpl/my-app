
export default class SocketEventEntity {

    #_name;
    #_data;

    get name() {
        return this.#_name;
    }

    set name(value) {
        this.#_name = value;
    }

    get data() {
        return this.#_data;
    }

    set data(value) {
        this.#_data = value;
    }
}
