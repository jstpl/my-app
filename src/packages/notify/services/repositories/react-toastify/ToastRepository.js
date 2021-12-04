import {toast} from "react-toastify";

export default class ToastRepository {

    get positions() {
        return {
            TOP_LEFT: toast.POSITION.TOP_LEFT,
            TOP_RIGHT: toast.POSITION.TOP_RIGHT,
            TOP_CENTER: toast.POSITION.TOP_CENTER,
            BOTTOM_LEFT: toast.POSITION.BOTTOM_LEFT,
            BOTTOM_RIGHT: toast.POSITION.BOTTOM_RIGHT,
            BOTTOM_CENTER: toast.POSITION.BOTTOM_CENTER,
        };
    }

    success(toastEntity) {
        toast.success(toastEntity.message, {
            position: this.positions[toastEntity.position],
        });
    }
}