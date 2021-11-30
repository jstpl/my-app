import store from "../../../app/config/store";
import crudAction from "../enums/crudAction";
import BaseService from "./BaseService";

export default class BaseCrudService extends BaseService {

    #_prefix = null;

    set prefix(value) {
        this.#_prefix = value;
    }

    get prefix() {
        let prefix;
        if(this.#_prefix == null) {
            prefix = this.reducer.prefix;
        } else {
            prefix = this.#_prefix;
        }
        return prefix;
    }

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
