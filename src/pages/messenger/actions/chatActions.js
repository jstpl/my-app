// import * as userActionEnum from '../enums/userActionEnum';
import crudAction from "../../../packages/domain/enums/crudAction";

throw new Error('deprecated');
export function getCollectionSuccess(dataProvider) {
    return {
        type: crudAction.ALL,
        dataProvider
    };
}
