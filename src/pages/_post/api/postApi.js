import axios from 'axios';
import collection from "../data/collection";
import configManager from "../../../app/singletons/configManager";
// import store from "../../../app/store";
// import {getUsersSuccess} from "../../user/actions/user-actions";

export default {
    all: async function () {
        let apiUrl = configManager.get('apiUrl');
        axios.get(apiUrl + '/post.json').then(function (response) {
             console.log(response.data);
        });
        return collection;
    },
    oneById: function (id) {
        for (let k in collection) {
            if(collection.hasOwnProperty(k)) {
                let entity = collection[k];
                if(entity.id === id) {
                    return entity;
                }
            }
        }
    }
};
