import BaseService from "./BaseService";

export default class BaseCrudService extends BaseService {

    #_storeRepository = null;
    #_repository = null;

    constructor(storeDispatcher = null, repository) {
        super();
        this.#_storeRepository = storeDispatcher;
        this.#_repository = repository;
    }

    get storeRepository() {
        return this.#_storeRepository;
    }

    get repository() {
        return this.#_repository;
    }

    async all(query = null) {
        try {
            let dataProvider = await this.repository.all(query);
            this.storeRepository.setDataProvider(dataProvider);
        } catch (error) {
            throw error;
        }
    }
}
