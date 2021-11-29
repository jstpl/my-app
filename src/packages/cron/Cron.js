import Timer from "./Timer";

export default class Cron {

    #timeOut = null;
    #timer;
    #startTime = null;
    #onExpire = null;
    #onTick = null;
    #tickInterval = null;

    constructor() {
        this.#timer = new Timer();
    }

    get timeOut() {
        return this.#timeOut;
    }

    set timeOut(value) {
        this.#timeOut = value;
    }

    set onExpire(value) {
        this.#onExpire = value;
    }

    set onTick(value) {
        this.#onTick = value;
    }

    get tickInterval() {
        return this.#tickInterval || 1000;
    }

    set tickInterval(value) {
        this.#tickInterval = value;
    }

    stop() {
        this.#timer.stop();
    }

    start(timeOut = null) {
        if(timeOut) {
            this.#timeOut = timeOut;
        }
        this.#startTime = this.#timer.timestamp();
        this.#timer.start(this.tickInterval, this._tick.bind(this));
    }

    _tick() {
        let entity = this._createEntity();
        if (entity.isExpired) {
            this._timeExpired(entity);
        }
        if(typeof this.#onTick === 'function') {
            this.#onTick(entity);
        }
    }

    _timeExpired(entity) {
        this.stop();
        if(typeof this.#onExpire === 'function') {
            this.#onExpire(entity);
        }
    }

    _createEntity() {
        let entity = {
            now: this.#timer.timestamp(),
            startTime: this.#startTime,
            timeOut: this.#timeOut,
        };
        entity.rest = entity.now - entity.startTime;
        entity.isExpired = entity.rest > entity.timeOut;
        return entity
    }
}
