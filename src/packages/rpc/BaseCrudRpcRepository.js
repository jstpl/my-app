import BaseRpcRepository from "./BaseRpcRepository";
import DataProvider from "../domain/DataProvider";

export default class BaseCrudRpcRepository extends BaseRpcRepository {

    endpoint() {
        throw new Error('Not implemented method "endpoint" in CRUD repository!');
    }

    async all() {
        let requestEntity = {
            method: this.endpoint() + '.all',
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
