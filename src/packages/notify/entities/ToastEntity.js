
export default class ToastEntity {

    #_message;
    #_type;
    #_position;

    get message() {
        return this.#_message;
    }

    set message(value) {
        this.#_message = value;
    }

    get type() {
        return this.#_type;
    }

    set type(value) {
        this.#_type = value;
    }

    get position() {
        return this.#_position;
    }

    set position(value) {
        this.#_position = value;
    }
}