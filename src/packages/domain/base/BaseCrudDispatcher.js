import crudAction from "../enums/crudAction";
import BaseDispatcher from "./BaseDispatcher";

export default class BaseCrudDispatcher extends BaseDispatcher {

    setDataProvider(dataProvider) {
        this.dispatch({
            type: this.reducerAction(crudAction.ALL),
            dataProvider
        });
    }
}
