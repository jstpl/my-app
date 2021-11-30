import store from '../../../app/config/store';

export default class ChatService {

    #_prefix;

    set prefix(value) {
        this.#_prefix = value;
    }

    get prefix() {
        return this.#_prefix;
    }

    actionName(name) {
        return this.prefix + name;
    }

    constructor(repository) {
        this.repository = repository;
    }

    async all() {
        try {
            let dataProvider = await this.repository.all();
            store.dispatch({
                type: this.actionName('all'),
                dataProvider
            });
        } catch (error) {
            throw error;
        }
    }
}
