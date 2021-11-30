import BaseService from "./BaseService";

export default class BaseCrudService extends BaseService {

    constructor(storeDispatcher = null, repository) {
        super(storeDispatcher);
        this.repository = repository;
    }

    async all() {
        try {
            let dataProvider = await this.repository.all();
            this.storeDispatcher.setDataProvider(dataProvider);
        } catch (error) {
            throw error;
        }
    }
}
