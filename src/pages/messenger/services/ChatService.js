import store from '../../../app/config/store';
import DataProvider from "../../../packages/domain/DataProvider";

export default class ChatService {

    constructor(chatRepository) {
        this.repository = chatRepository;
    }

    async all() {
        try {
            let responseEntity = await this.repository.all();
            let dataProvider = new DataProvider();
            dataProvider.collection = responseEntity.body;
            dataProvider.paginator = responseEntity.meta;
            store.dispatch({
                type: 'GET_COLLECTION_SUCCESS',
                dataProvider
            });
        } catch (error) {
            throw error;
        }
    }
}
