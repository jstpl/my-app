
import BreadcrumbService from "./domain/services/BreadcrumbService";
import ItemRepository from "./domain/repositories/state/ItemRepository";

let repositories = {
    state: {},
};
repositories.state.items = new ItemRepository();

let services = {};
services.breadcrumb = new BreadcrumbService(repositories.state.items);

let reducers = {};
reducers.breadcrumbItem = repositories.state.items.state;

export default {
    reducers,
    services,
    repositories,
};
