import BaseCrudStateRepository from "../../../../domain/repositories/state/BaseCrudStateRepository";

export default class ItemRepository extends BaseCrudStateRepository {

    #_collection = [];

    get initialState() {
        return {
            collection: [],
        };
    }

    get reducerPrefix() {
        return 'breadcrumbItem';
    }

    add(itemEntity) {
        this.#_collection.push(itemEntity);
        this._syncState();
    }

    clear() {
        this.#_collection = [];
        this._syncState();
    }

    _syncState() {
        this.setValue({collection: this.#_collection});
    }

    /*setChatId(chatId) {
        this.setValue({chatId});
    }

    getChatId() {
        return this.getValue('chatId');
    }*/
}
