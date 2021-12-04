import container from "../../../app/config/container";
import ToastEntity from "../entities/ToastEntity";

let service = container.notify.services.toast;

class ToastFacade {

    success(message, position = null) {
        let toastEntity = new ToastEntity();
        toastEntity.message = message;
        toastEntity.position = position;
        toastEntity.type = service.types.SUCCESS;
        service.send(toastEntity);
    }

    info(message, position = null) {
        let toastEntity = new ToastEntity();
        toastEntity.message = message;
        toastEntity.position = position;
        toastEntity.type = service.types.INFO;
        service.send(toastEntity);
    }

    error(message, position = null) {
        let toastEntity = new ToastEntity();
        toastEntity.message = message;
        toastEntity.position = position;
        toastEntity.type = service.types.ERROR;
        service.send(toastEntity);
    }
}

let toastService = new ToastFacade();
export default toastService;
