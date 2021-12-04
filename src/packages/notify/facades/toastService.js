import container from "../../../app/config/container";
import ToastEntity from "../entities/ToastEntity";

let toastService = container.notify.services.toast;

class ToastServiceFacade {

    success(message, position = null) {
        let toastEntity = new ToastEntity();
        toastEntity.message = message;
        toastEntity.position = position;
        toastEntity.type = toastService.types.SUCCESS;
        toastService.send(toastEntity);
    }

    info(message, position = null) {
        let toastEntity = new ToastEntity();
        toastEntity.message = message;
        toastEntity.position = position;
        toastEntity.type = toastService.types.INFO;
        toastService.send(toastEntity);
    }

    error(message, position = null) {
        let toastEntity = new ToastEntity();
        toastEntity.message = message;
        toastEntity.position = position;
        toastEntity.type = toastService.types.ERROR;
        toastService.send(toastEntity);
    }
}

export default new ToastServiceFacade;
