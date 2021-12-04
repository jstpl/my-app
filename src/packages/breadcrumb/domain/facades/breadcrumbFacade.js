import container from "../../../../app/config/container";

class BreadcrumbFacade {

    addHome() {
        container.breadcrumb.services.breadcrumb.clear();
        this.add('Home', '/');
    }

    add(title, route = '/') {
        container.breadcrumb.services.breadcrumb.add(title, route);
    }
}

export default new BreadcrumbFacade();
