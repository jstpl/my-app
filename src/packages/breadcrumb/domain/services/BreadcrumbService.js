
export default class BreadcrumbService {

    #_itemRepository;

    constructor(itemRepository) {
        this.#_itemRepository = itemRepository;
    }

    clear() {
        this.#_itemRepository.clear();
    }

    add(title, route) {
        let itemEntity = {
            title: title,
            route: route,
        };
        this.#_itemRepository.add(itemEntity);
    }
}