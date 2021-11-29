import store from '../../../app/config/store';

export default class ChatService {

    constructor(repository) {
        this.repository = repository;
    }

    async all() {
        try {
            let dataProvider = await this.repository.all();
            store.dispatch({
                type: 'GET_COLLECTION_SUCCESS',
                dataProvider
            });
        } catch (error) {
            throw error;
        }
    }
}
