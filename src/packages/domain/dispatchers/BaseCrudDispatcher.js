import BaseDispatcher from "./BaseDispatcher";

export default class BaseCrudDispatcher extends BaseDispatcher {

    setDataProvider(dataProvider) {
        this.setValue({
            dataProvider
        });
    }
}
