import BaseRpcRepository from "../../../../packages/rpc/BaseRpcRepository";
import DataProvider from "../../../../packages/domain/DataProvider";

export default class ChatRepository extends BaseRpcRepository {

    async all() {
        let requestEntity = {
            method: 'messenger-chat.all',
           // body: body,
        };

        try {
            let responseEntity = await this.sendRequest(requestEntity);
            let dataProvider = new DataProvider();
            dataProvider.collection = responseEntity.body;
            dataProvider.paginator = responseEntity.meta;
            return dataProvider;
        } catch (error) {
            throw error;
        }
    }
}
