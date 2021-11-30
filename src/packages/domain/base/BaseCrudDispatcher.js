import store from "../../../app/config/store";
import crudAction from "../enums/crudAction";
import BaseDispatcher from "./BaseDispatcher";

export default class BaseCrudDispatcher extends BaseDispatcher {

    setDataProvider(dataProvider) {
        store.dispatch({
            type: this.reducerAction(crudAction.ALL),
            dataProvider
        });
    }
}
