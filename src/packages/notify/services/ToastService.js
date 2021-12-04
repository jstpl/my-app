export default class ToastService {

    constructor(ToastRepository) {
        this.repository = ToastRepository;
    }

    get positions() {
        return {
            TOP_LEFT: 'TOP_LEFT',
            TOP_RIGHT: 'TOP_RIGHT',
            TOP_CENTER: 'TOP_CENTER',
            BOTTOM_LEFT: 'BOTTOM_LEFT',
            BOTTOM_RIGHT: 'BOTTOM_RIGHT',
            BOTTOM_CENTER: 'BOTTOM_CENTER',
        };
    }

    get types() {
        return {
            INFO: 'INFO',
            SUCCESS: 'SUCCESS',
            WARNING: 'WARNING',
            ERROR: 'ERROR',
            DEFAULT: 'DEFAULT',
            DARK: 'DARK',
        };
    }

    send(toastEntity) {
        toastEntity.position = toastEntity.position || this.positions.BOTTOM_RIGHT;
        toastEntity.type = toastEntity.type || this.types.INFO;
        this.repository.send(toastEntity);
    }
}
