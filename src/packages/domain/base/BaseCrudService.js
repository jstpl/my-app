import BaseService from "./BaseService";

export default class BaseCrudService extends BaseService {

    constructor(repository) {
        super();
        this.repository = repository;
    }

    async all() {
        try {
            let dataProvider = await this.repository.all();
            this.reducerDispatcher.setDataProvider(dataProvider);
            /*store.dispatch({
                type: this.reducerAction(crudAction.ALL),
                dataProvider
            });*/
        } catch (error) {
            throw error;
        }
    }
}
