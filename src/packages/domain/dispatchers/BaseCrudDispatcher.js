import crudAction from "../enums/crudAction";
import BaseDispatcher from "./BaseDispatcher";

export default class BaseCrudDispatcher extends BaseDispatcher {

    setDataProvider(dataProvider) {
        //let type = this.reducerAction(crudAction.ALL);
        this.dispatch({
            type: crudAction.ALL,
            dataProvider
        });
    }
}
