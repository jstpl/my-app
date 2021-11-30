import store from "../../../app/config/store";
import crudAction from "../enums/crudAction";
import BaseService from "./BaseService";

export default class BaseCrudService extends BaseService {

    actionName(name) {
        return this.prefix + name;
    }

    constructor(repository) {
        super();
        this.repository = repository;
    }

    async all() {
        try {
            let dataProvider = await this.repository.all();
            store.dispatch({
                type: this.actionName(crudAction.ALL),
                dataProvider
            });
        } catch (error) {
            throw error;
        }
    }
}
