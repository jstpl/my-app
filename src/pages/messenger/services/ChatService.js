import store from '../../../app/config/store';
import crudAction from "../../../packages/domain/enums/crudAction";

export default class ChatService {

    constructor(repository) {
        this.repository = repository;
    }

    async all() {
        try {
            let dataProvider = await this.repository.all();
            store.dispatch({
                type: crudAction.ALL,
                dataProvider
            });
        } catch (error) {
            throw error;
        }
    }
}
