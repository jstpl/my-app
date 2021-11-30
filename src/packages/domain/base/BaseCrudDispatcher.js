import crudAction from "../enums/crudAction";
import BaseDispatcher from "./BaseDispatcher";

export default class BaseCrudDispatcher extends BaseDispatcher {

    setDataProvider(dataProvider) {
        this.store.dispatch({
            type: this.reducerAction(crudAction.ALL),
            dataProvider
        });
    }
}
