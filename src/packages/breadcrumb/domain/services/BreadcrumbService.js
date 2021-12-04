
export default class BreadcrumbService {

    #_itemRepository;

    constructor(itemRepository) {
        this.#_itemRepository = itemRepository;
    }

    addHome() {
        this.#_itemRepository.clear();
        this.add('Home', '/');
    }

    add(title, route) {
        let itemEntity = {
            title: title,
            route: route,
        };
        this.#_itemRepository.add(itemEntity);
    }
}