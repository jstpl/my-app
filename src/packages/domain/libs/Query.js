
export default class Query {

    #_filter = {};
    #_page = 1;
    #_perPage = null;

    get filter() {
        return this.#_filter;
    }

    set filter(value) {
        this.#_filter = value;
    }

    get page() {
        return this.#_page;
    }

    set page(value) {
        this.#_page = value;
    }

    get perPage() {
        return this.#_perPage;
    }

    set perPage(value) {
        this.#_perPage = value;
    }
}
