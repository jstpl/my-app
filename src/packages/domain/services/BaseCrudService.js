import BaseService from "./BaseService";

export default class BaseCrudService extends BaseService {

    #_stateRepository = null;
    #_repository = null;

    constructor(storeDispatcher = null, repository) {
        super();
        this.#_stateRepository = storeDispatcher;
        this.#_repository = repository;
    }

    get stateRepository() {
        return this.#_stateRepository;
    }

    get repository() {
        return this.#_repository;
    }

    async all(query = null) {
        try {
            let dataProvider = await this.repository.all(query);
            this.stateRepository.setDataProvider(dataProvider);
        } catch (error) {
            throw error;
        }
    }
}
