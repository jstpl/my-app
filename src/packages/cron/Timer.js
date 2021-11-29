export default class Timer {

    #handler = null;

    timestamp() {
        return new Date().getTime() / 1000;
    }

    stop() {
        clearInterval(this.#handler);
        this.#handler = null;
    }

    start(interval = 1000, onTick) {
        if (this.#handler === null) {
            this.#handler = setInterval(function () {
                onTick();
            }, interval);
        }
    }
}
