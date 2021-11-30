import BaseRpcRepository from "./BaseRpcRepository";
import DataProvider from "../domain/libs/DataProvider";
import crudRpcMethodEnum from "./enums/crudRpcMethodEnum";

export default class BaseCrudRpcRepository extends BaseRpcRepository {

    #_methodPrefix = null;

    constructor(methodPrefix) {
        super();
        this.methodPrefix = methodPrefix;
    }

    get methodPrefix() {
        if(this.#_methodPrefix == null) {
            throw new Error('Not configured attribute "methodPrefix" in CRUD repository!');
        }
        return this.#_methodPrefix;
    }

    set methodPrefix(value) {
        this.#_methodPrefix = value;
    }

    methodName(name) {
        return this.methodPrefix + '.' + name;
    }

    async all() {
        let requestEntity = {
            method: this.methodName(crudRpcMethodEnum.ALL),
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
