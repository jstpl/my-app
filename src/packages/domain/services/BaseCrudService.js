import BaseService from "./BaseService";

export default class BaseCrudService extends BaseService {

    #_storeDispatcher = null;
    #_repository = null;

    constructor(storeDispatcher = null, repository) {
        super();
        this.#_storeDispatcher = storeDispatcher;
        this.#_repository = repository;
        this._repository = repository;
    }

    get storeDispatcher() {
        return this.#_storeDispatcher;
    }

    get repository() {
        return this._repository;
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
