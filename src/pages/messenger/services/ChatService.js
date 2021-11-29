import store from '../../../app/config/store';
import DataProvider from "../../../packages/domain/DataProvider";
import * as chatActions from "../actions/chatActions";
// import * as authAction from '../actions/authActions';
// import eventEmitter from '../../../app/singletons/eventEmitter';
// import authEventEnum from "../enums/authEventEnum";

export default class ChatService {

    constructor(authRepository, tokenRepository) {
        this.authRepository = authRepository;
        this.tokenRepository = tokenRepository;
    }

    async all() {
        try {
            let responseEntity = await this.authRepository.all();
            let dataProvider = new DataProvider();
            dataProvider.collection = responseEntity.body;
            dataProvider.paginator = responseEntity.meta;

            //this.tokenRepository.set(token);
            /*eventEmitter.emit(authEventEnum.AUTHORIZATION, token);
            let identityEntity = {
                id: 1234,
                name: 'Jasy'
            };*/
            //store.dispatch(authAction.authorizationSuccess(identityEntity));

            store.dispatch(chatActions.getCollectionSuccess(dataProvider));
            //return dataProvider;
        } catch (error) {
            throw error;
        }
    }
}
