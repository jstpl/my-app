import BaseRpcRepository from "./BaseRpcRepository";
import DataProvider from "../../domain/libs/DataProvider";
import crudRpcMethodEnum from "../enums/crudRpcMethodEnum";
import Paginator from "../../domain/libs/Paginator";
import _ from 'lodash';

export default class BaseCrudRpcRepository extends BaseRpcRepository {

    #_methodPrefix = null;

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

    async all(query = null) {
        let requestEntity = {
            method: this.methodName(crudRpcMethodEnum.ALL),
            // body: body,
        };
        this._forgeRequestByQuery(requestEntity, query);
        try {
            let responseEntity = await this.sendRequest(requestEntity);
            let dataProvider = new DataProvider();
            dataProvider.collection = responseEntity.body;
            dataProvider.paginator = this._createPaginatorFromRequestMeta(responseEntity.meta);
            dataProvider.query = query;
            return dataProvider;
        } catch (error) {
            throw error;
        }
    }

    _forgeRequestByQuery(requestEntity, query) {
        if(query) {
            requestEntity.body = {};
            if(query.filter) {
                _.set(requestEntity.body, 'filter', query.filter);
                // requestEntity.body.filter = query.filter;
            }
        }
        return requestEntity;
    }

    _createPaginatorFromRequestMeta(meta) {
        let paginator = new Paginator();
        paginator.page = meta.page || 1;
        paginator.perPage = meta.perPage || null;
        paginator.totalCount = meta.totalCount || null;
        return paginator;
    }
}
